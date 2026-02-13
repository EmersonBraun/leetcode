// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("kill-process", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Find all processes to kill (including children)
 * @param {number[]} pid - List of process IDs
 * @param {number[]} ppid - List of parent process IDs
 * @param {number} kill - Process ID to kill
 * @return {number[]} - List of all process IDs to kill
 */
function killProcess(pid, ppid, kill) {
  // Build tree: map parent -> children
  const childrenMap = new Map();
  
  for (let i = 0; i < pid.length; i++) {
    const parent = ppid[i];
    const child = pid[i];
    
    if (!childrenMap.has(parent)) {
      childrenMap.set(parent, []);
    }
    childrenMap.get(parent).push(child);
  }
  
  const result = [];
  
  /**
   * DFS to collect all descendants
   * @param {number} processId - Current process ID
   */
  function dfs(processId) {
    // Add current process to result
    result.push(processId);
    
    // Recursively kill all children
    if (childrenMap.has(processId)) {
      for (const child of childrenMap.get(processId)) {
        dfs(child);
      }
    }
  }
  
  // Start DFS from the process to kill
  dfs(kill);
  
  return result;
}

// Test cases
console.log('Example 1:', killProcess([2, 4, 3, 7], [0, 2, 2, 3], 3)); 
// [3, 7]

console.log('Example 2:', killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5)); 
// [5, 10]

console.log('Example 3:', killProcess([1, 2, 3], [0, 1, 1], 1)); 
// [1, 2, 3]`;
    const testCases = [
  {
    "input": "JSON.stringify(killProcess([2, 4, 3, 7], [0, 2, 2, 3], 3))",
    "expected": "[3,7]"
  },
  {
    "input": "JSON.stringify(killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5))",
    "expected": "[5,10]"
  },
  {
    "input": "JSON.stringify(killProcess([1, 2, 3], [0, 1, 1], 1))",
    "expected": "[1,2,3]"
  }
];
    testCases.forEach((tc, i) => {
      it(`case ${i + 1}: ${tc.input}`, () => {
        const __body = code + "\n; (" + tc.input + ")";
        const run = new Function("body", "return eval(body)");
        let result = run(__body);
        let expected;
        try {
          expected = JSON.parse(tc.expected);
        } catch {
          expected = tc.expected;
        }
        if (typeof result === "string") {
          try {
            result = JSON.parse(result);
          } catch {}
        }
        expect(result).toEqual(expected);
      });
    });
  });
});
