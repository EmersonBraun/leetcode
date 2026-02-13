// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("letter-case-permutation", () => {
  describe("JavaScript Solution - Backtracking", () => {
    const code = `/**
 * Generate all letter case permutations
 * @param {string} s - Input string
 * @return {string[]} - All possible permutations
 */
function letterCasePermutation(s) {
  const result = [];
  const current = [];
  
  /**
   * Check if character is a letter
   */
  function isLetter(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
  }
  
  /**
   * Backtracking function
   * @param {number} index - Current character index
   */
  function backtrack(index) {
    // Base case: processed all characters
    if (index === s.length) {
      result.push(current.join(''));
      return;
    }
    
    const char = s[index];
    
    // If character is a digit, add it as is
    if (!isLetter(char)) {
      current.push(char);
      backtrack(index + 1);
      current.pop();
    } else {
      // Character is a letter, try both cases
      // Option 1: Lowercase
      current.push(char.toLowerCase());
      backtrack(index + 1);
      current.pop();
      
      // Option 2: Uppercase
      current.push(char.toUpperCase());
      backtrack(index + 1);
      current.pop();
    }
  }
  
  backtrack(0);
  return result;
}

// Test cases
console.log('Example 1:', letterCasePermutation("c7w2")); 
// ["c7w2", "c7W2", "C7w2", "C7W2"]

console.log('Example 2:', letterCasePermutation("a1b2")); 
// ["a1b2", "a1B2", "A1b2", "A1B2"]

console.log('Example 3:', letterCasePermutation("3z4")); 
// ["3z4", "3Z4"]

console.log('Example 4:', letterCasePermutation("12345")); 
// ["12345"]`;
    const testCases = [
  {
    "input": "JSON.stringify(letterCasePermutation(\"c7w2\"))",
    "expected": "[\"c7w2\",\"c7W2\",\"C7w2\",\"C7W2\"]"
  },
  {
    "input": "JSON.stringify(letterCasePermutation(\"3z4\"))",
    "expected": "[\"3z4\",\"3Z4\"]"
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
