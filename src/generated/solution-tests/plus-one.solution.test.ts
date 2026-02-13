// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("plus-one", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Add one to a number represented as an array of digits
 * @param {number[]} digits - Array of digits representing a number
 * @return {number[]} - Result after adding one
 */
function plusOne(digits) {
  // Start from the rightmost digit
  for (let i = digits.length - 1; i >= 0; i--) {
    // Add one to the current digit
    digits[i]++;
    
    // If the digit is less than 10, no carry needed
    if (digits[i] < 10) {
      return digits;
    }
    
    // Otherwise, set to 0 and continue (carry will be handled in next iteration)
    digits[i] = 0;
  }
  
  // If we've processed all digits and still have a carry,
  // we need to add a new digit 1 at the beginning
  return [1, ...digits];
}

// Test cases
console.log(plusOne([1, 2])); // [1, 3]
console.log(plusOne([9, 9])); // [1, 0, 0]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9])); // [1, 0]
console.log(plusOne([1, 9, 9])); // [2, 0, 0]
console.log(plusOne([0])); // [1]`;
    const testCases = [
  {
    "input": "plusOne([1, 2])",
    "expected": "[1,3]"
  },
  {
    "input": "plusOne([9, 9])",
    "expected": "[1,0,0]"
  },
  {
    "input": "plusOne([4, 3, 2, 1])",
    "expected": "[4,3,2,2]"
  },
  {
    "input": "plusOne([9])",
    "expected": "[1,0]"
  },
  {
    "input": "plusOne([1, 9, 9])",
    "expected": "[2,0,0]"
  },
  {
    "input": "plusOne([0])",
    "expected": "[1]"
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
