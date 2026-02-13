// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("remove-invalid-parentheses", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Remove minimum parentheses to make string valid
 * @param {string} s - Input string
 * @return {string[]} - All possible valid strings
 */
function removeInvalidParentheses(s) {
  const result = new Set();
  
  // Count how many '(' and ')' we need to remove
  let leftRem = 0;  // Unmatched opening parentheses
  let rightRem = 0;  // Unmatched closing parentheses
  
  // First pass: count unmatched opening parentheses
  for (let char of s) {
    if (char === '(') {
      leftRem++;
    } else if (char === ')') {
      if (leftRem > 0) {
        leftRem--;  // Matched
      } else {
        rightRem++;  // Unmatched
      }
    }
  }
  
  /**
   * Backtracking function to generate all valid strings
   * @param {string} str - Current string being built
   * @param {number} index - Current index in original string
   * @param {number} leftCount - Number of '(' used so far
   * @param {number} rightCount - Number of ')' used so far
   * @param {number} leftRem - Remaining '(' to remove
   * @param {number} rightRem - Remaining ')' to remove
   */
  function backtrack(str, index, leftCount, rightCount, leftRem, rightRem) {
    // Base case: processed entire string
    if (index === s.length) {
      // Valid if balanced and no more removals needed
      if (leftRem === 0 && rightRem === 0 && leftCount === rightCount) {
        result.add(str);
      }
      return;
    }
    
    const char = s[index];
    
    // Case 1: Skip this character (remove it)
    if ((char === '(' && leftRem > 0) || (char === ')' && rightRem > 0)) {
      backtrack(
        str,
        index + 1,
        leftCount,
        rightCount,
        leftRem - (char === '(' ? 1 : 0),
        rightRem - (char === ')' ? 1 : 0)
      );
    }
    
    // Case 2: Keep this character
    if (char !== '(' && char !== ')') {
      // Regular character, always keep
      backtrack(str + char, index + 1, leftCount, rightCount, leftRem, rightRem);
    } else if (char === '(') {
      // Opening parenthesis
      backtrack(str + char, index + 1, leftCount + 1, rightCount, leftRem, rightRem);
    } else if (char === ')' && rightCount < leftCount) {
      // Closing parenthesis (only if we have matching opening)
      backtrack(str + char, index + 1, leftCount, rightCount + 1, leftRem, rightRem);
    }
  }
  
  backtrack('', 0, 0, 0, leftRem, rightRem);
  return Array.from(result);
}

// Test cases
console.log('Example 1:', removeInvalidParentheses("(()()()")); 
// ["()()()","(())()","(()())"]

console.log('Example 2:', removeInvalidParentheses("()()()")); 
// ["()()()"]

console.log('Example 3:', removeInvalidParentheses("()())()")); 
// ["()()()", "(())()"]

console.log('Example 4:', removeInvalidParentheses("(a)())()")); 
// ["(a)()()", "(a())()"]`;
    const testCases = [
  {
    "input": "removeInvalidParentheses(\"(()()()\").sort().join(\",\")",
    "expected": "(()()),(())(),()()()"
  },
  {
    "input": "removeInvalidParentheses(\"()()()\").join(\",\")",
    "expected": "()()()"
  },
  {
    "input": "removeInvalidParentheses(\"()())()\").sort().join(\",\")",
    "expected": "(())(),()()()"
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
