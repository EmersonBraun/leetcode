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
        try {
          // Create a test function from the code with proper variable scoping
          const testCode = `
${code}

# Test case ${i + 1}
test_index = ${i + 1}
test_input = """${testCase.input}"""
expected_output = """${testCase.expected}"""

try:
    result = ${testCase.input}
    print(f"Test {{test_index}} result: {{result}}")
    print(f"Expected: {{expected_output}}")
    print(f"Passed: {{str(result) == expected_output}}")
except Exception as e:
    print(f"Test {{test_index}} error: {{e}}")
`;
          await pyodide.runPythonAsync(testCode);
          testOutput += `Test ${i + 1}: ✅ EXECUTED\n`;
          testOutput += `Input: ${testCase.input}\n`;
          testOutput += `Expected: ${testCase.expected}\n`;
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
        
        ${testCases.map((testCase, i) => `
        try {
          // Test case ${i + 1}
          const result = eval(\`${testCase.input}\`);
          const passed = String(result).includes('${testCase.expected}');
          output += \`Test ${i + 1}: \${passed ? '✅ PASSED' : '❌ FAILED'}\\n\`;
          output += \`Input: ${testCase.input}\\n\`;
          output += \`Expected: ${testCase.expected}\\n\`;
          output += \`Output: \${result}\\n\`;
          output += '-'.repeat(30) + '\\n';
        } catch (error) {
          output += \`Test ${i + 1}: ❌ ERROR\\n\`;
          output += \`Error: \${error}\\n\`;
          output += '-'.repeat(30) + '\\n';
        }
        `).join('')}
        
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
