// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("generate-parentheses", () => {
  describe("JavaScript Solution - Backtracking", () => {
    const code = `/**
 * Generate all valid parentheses combinations
 * @param {number} N - Number of pairs of parentheses
 * @return {string[]} - All valid combinations
 */
function generateParenthesis(N) {
  const result = [];
  const current = [];
  
  /**
   * Backtracking function
   * @param {number} open - Number of opening parentheses used
   * @param {number} close - Number of closing parentheses used
   */
  function backtrack(open, close) {
    // Base case: used all N pairs
    if (open === N && close === N) {
      result.push(current.join(''));
      return;
    }
    
    // Can add opening parenthesis if we haven't used all N
    if (open < N) {
      current.push('(');
      backtrack(open + 1, close);
      current.pop(); // Backtrack
    }
    
    // Can add closing parenthesis if we have more open than close
    // This ensures the parentheses are well-formed
    if (close < open) {
      current.push(')');
      backtrack(open, close + 1);
      current.pop(); // Backtrack
    }
  }
  
  backtrack(0, 0);
  return result;
}

// Test cases
console.log('Example 1:', generateParenthesis(3)); 
// ["((()))", "(()())", "(())()", "()(())", "()()()"]

console.log('Example 2:', generateParenthesis(1)); 
// ["()"]

console.log('Example 3:', generateParenthesis(2)); 
// ["(())", "()()"]`;
    const testCases = [
  {
    "input": "JSON.stringify(generateParenthesis(3))",
    "expected": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
  },
  {
    "input": "JSON.stringify(generateParenthesis(2))",
    "expected": "[\"(())\",\"()()\"]"
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
