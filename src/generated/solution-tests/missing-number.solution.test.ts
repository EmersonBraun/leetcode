// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("missing-number", () => {
  describe("JavaScript Solution - Sum Approach", () => {
    const code = `/**
 * Find missing number using sum
 * @param {number[]} nums - Array with one missing number
 * @return {number} - Missing number
 */
function missingNumber(nums) {
  const n = nums.length; // N = length (since 0 to N has N+1 numbers, but one is missing)
  const expectedSum = (n * (n + 1)) / 2; // Sum of 0 to N
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
  return expectedSum - actualSum;
}

// Test cases
console.log('Example 1:', missingNumber([1, 4, 2, 0])); 
// 3

console.log('Example 2:', missingNumber([6, 3, 1, 2, 0, 5])); 
// 4

console.log('Example 3:', missingNumber([0, 1])); 
// 2`;
    const testCases = [
  {
    "input": "missingNumber([1, 4, 2, 0])",
    "expected": "3"
  },
  {
    "input": "missingNumber([6, 3, 1, 2, 0, 5])",
    "expected": "4"
  },
  {
    "input": "missingNumber([0, 1])",
    "expected": "2"
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
