// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("letter-combinations-phone-number", () => {
  describe("JavaScript Solution - Backtracking", () => {
    const code = `/**
 * Generate all letter combinations from phone number digits
 * @param {string} digits - String of digits
 * @return {string[]} - All possible letter combinations
 */
function letterCombinations(digits) {
  // Handle empty input
  if (!digits || digits.length === 0) {
    return [];
  }
  
  // Digit to letters mapping
  const digitMap = {
    '0': '',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  const result = [];
  const current = [];
  
  /**
   * Backtracking function
   * @param {number} index - Current digit index
   */
  function backtrack(index) {
    // Base case: processed all digits
    if (index === digits.length) {
      result.push(current.join(''));
      return;
    }
    
    // Get letters for current digit
    const digit = digits[index];
    const letters = digitMap[digit];
    
    // Skip if digit maps to empty string (0 or 1)
    if (letters.length === 0) {
      backtrack(index + 1);
      return;
    }
    
    // Try each letter for current digit
    for (const letter of letters) {
      current.push(letter);
      backtrack(index + 1);
      current.pop(); // Backtrack
    }
  }
  
  backtrack(0);
  return result;
}

// Test cases
console.log('Example 1:', letterCombinations("23")); 
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

console.log('Example 2:', letterCombinations("2")); 
// ["a", "b", "c"]

console.log('Example 3:', letterCombinations("")); 
// []

console.log('Example 4:', letterCombinations("79")); 
// ["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"]`;
    const testCases = [
  {
    "input": "JSON.stringify(letterCombinations(\"23\"))",
    "expected": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
  },
  {
    "input": "JSON.stringify(letterCombinations(\"2\"))",
    "expected": "[\"a\",\"b\",\"c\"]"
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
