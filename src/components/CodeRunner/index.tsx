import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.css';

interface CodeRunnerProps {
  language: 'python' | 'javascript';
  code: string;
  testCases: Array<{
    input: string;
    expected: string;
    description?: string;
  }>;
  title: string;
}

export default function CodeRunner({ language, code, testCases, title }: CodeRunnerProps) {
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [pyodide, setPyodide] = useState<any>(null);
  const [isPyodideLoaded, setIsPyodideLoaded] = useState(false);
  const [pyodideError, setPyodideError] = useState<string>('');
  const outputRef = useRef<HTMLDivElement>(null);

  // Load Pyodide for Python execution
  useEffect(() => {
    if (language === 'python' && !isPyodideLoaded && !pyodideError) {
      const loadPyodide = async () => {
        try {
          setOutput('Loading Python runtime... Please wait.\n');
          
          // Load Pyodide from CDN
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
          script.onload = async () => {
            try {
              // @ts-ignore
              const pyodideInstance = await window.loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
              });
              setPyodide(pyodideInstance);
              setIsPyodideLoaded(true);
              setOutput('Python runtime loaded successfully! Ready to run code.\n');
            } catch (error) {
              console.error('Failed to initialize Pyodide:', error);
              const errorMsg = `Python runtime failed to load. You can still copy the code and run it locally.\n\nError details: ${error}`;
              setOutput(errorMsg);
              setPyodideError(errorMsg);
            }
          };
          script.onerror = () => {
            const errorMsg = 'Python runtime failed to load. You can still copy the code and run it locally.';
            setOutput(errorMsg);
            setPyodideError(errorMsg);
          };
          document.head.appendChild(script);
        } catch (error) {
          console.error('Failed to load Pyodide:', error);
          const errorMsg = `Python runtime failed to load. You can still copy the code and run it locally.\n\nError details: ${error}`;
          setOutput(errorMsg);
          setPyodideError(errorMsg);
        }
      };
      loadPyodide();
    }
  }, [language, isPyodideLoaded, pyodideError]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running...\n');

    try {
      if (language === 'python') {
        if (pyodideError) {
          // Show a helpful message for Python when Pyodide fails
          setOutput(`Python runtime is not available.\n\nYou can copy the code above and run it in your local Python environment.\n\nTest cases:\n${testCases.map((tc, i) => `${i + 1}. ${tc.input} → Expected: ${tc.expected}`).join('\n')}`);
          return;
        }
        await runPythonCode();
      } else {
        runJavaScriptCode();
      }
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsRunning(false);
    }
  };

  const runPythonCode = async () => {
    if (!pyodide) {
      setOutput('Error: Python runtime not loaded yet. Please wait and try again.');
      return;
    }

    try {
      // First, try to run the code to check for syntax errors
      await pyodide.runPythonAsync(code);
      
      // Test with test cases
      let testOutput = 'Code executed successfully!\n\n';
      testOutput += 'Test Results:\n';
      testOutput += '='.repeat(40) + '\n';

      for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        const expectedEscaped = testCase.expected.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        try {
          // Run user code then test case; last expression (__passed__) is returned to JS
          const testCode = `
${code}
import json
__expected_str__ = """${expectedEscaped}"""
try:
    __expected_val__ = json.loads(__expected_str__)
except (json.JSONDecodeError, ValueError):
    if __expected_str__ in ('True', 'False'):
        __expected_val__ = (__expected_str__ == 'True')
    else:
        __expected_val__ = __expected_str__
try:
    __result__ = ${testCase.input}
    __passed__ = __result__ == __expected_val__
except Exception as e:
    __passed__ = False
    __result__ = str(e)
__passed__
`;
          const passed = await pyodide.runPythonAsync(testCode);
          testOutput += `Test ${i + 1}: ${passed ? '✅ PASSED' : '❌ FAILED'}\n`;
          testOutput += `Input: ${testCase.input}\n`;
          testOutput += `Expected: ${testCase.expected}\n`;
          if (!passed) {
            const resultStr = await pyodide.runPythonAsync('str(__result__)');
            testOutput += `Output: ${resultStr}\n`;
          }
          testOutput += '-'.repeat(30) + '\n';
        } catch (error) {
          testOutput += `Test ${i + 1}: ❌ ERROR\n`;
          testOutput += `Error: ${error}\n`;
          testOutput += '-'.repeat(30) + '\n';
        }
      }

      setOutput(testOutput);
    } catch (error) {
      setOutput(`Python Error: ${error}\n\nThis usually means there's a syntax error in the code. Please check the code and try again.`);
    }
  };

  const runJavaScriptCode = () => {
    try {
      // Create a safe execution environment
      const safeEval = new Function(`
        "use strict";
        let output = '';
        const console = {
          log: (...args) => {
            output += args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' ') + '\\n';
          }
        };
        
        ${code}
        
        // Test with test cases
        output += '\\nTest Results:\\n';
        output += '='.repeat(40) + '\\n';
        
        ${testCases.map((testCase, i) => {
          const expectedEscaped = JSON.stringify(testCase.expected);
          const inputForEval = testCase.input.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
          return `
        try {
          // Test case ${i + 1}
          const result = eval(\`${inputForEval}\`);
          const expectedStr = ${expectedEscaped};
          let expectedParsed;
          try { expectedParsed = JSON.parse(expectedStr); } catch (e) { expectedParsed = expectedStr; }
          const passed = JSON.stringify(result) === JSON.stringify(expectedParsed);
          output += \`Test ${i + 1}: \${passed ? '✅ PASSED' : '❌ FAILED'}\\n\`;
          output += \`Input: ${testCase.input.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\\n\`;
          output += \`Expected: ${testCase.expected.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\\n\`;
          output += \`Output: \${typeof result === 'object' ? JSON.stringify(result) : result}\\n\`;
          output += '-'.repeat(30) + '\\n';
        } catch (error) {
          output += \`Test ${i + 1}: ❌ ERROR\\n\`;
          output += \`Error: \${error}\\n\`;
          output += '-'.repeat(30) + '\\n';
        }
        `;
        }).join('')}
        
        return output;
      `);

      const result = safeEval();
      setOutput(result);
    } catch (error) {
      setOutput(`JavaScript Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const clearOutput = () => {
    setOutput('');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const retryPyodide = () => {
    setPyodideError('');
    setIsPyodideLoaded(false);
    setPyodide(null);
  };

  return (
    <div className={styles.codeRunner}>
      <div className={styles.header}>
        <h4>{title}</h4>
        <div className={styles.actions}>
          <button 
            onClick={copyCode} 
            className={styles.actionButton}
            title="Copy code"
          >
            📋
          </button>
          <button 
            onClick={clearOutput} 
            className={styles.actionButton}
            title="Clear output"
          >
            🗑️
          </button>
        </div>
      </div>
      
      <div className={styles.codeContainer}>
        <pre className={styles.codeBlock}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
      
      <div className={styles.controls}>
        <button 
          onClick={runCode} 
          disabled={isRunning}
          className={styles.runButton}
        >
          {isRunning ? 'Running...' : '▶️ Run Code'}
        </button>
        {language === 'python' && !isPyodideLoaded && !pyodideError && (
          <span className={styles.loading}>Loading Python runtime...</span>
        )}
        {language === 'python' && pyodideError && (
          <button onClick={retryPyodide} className={styles.actionButton}>
            🔄 Retry
          </button>
        )}
      </div>
      
      <div className={styles.outputContainer}>
        <h5>Output:</h5>
        <div ref={outputRef} className={styles.output}>
          {output || 'Click "Run Code" to execute the code and see the results.'}
        </div>
      </div>
    </div>
  );
}
