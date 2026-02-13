// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("third-maximum-number", () => {
  describe("JavaScript Solution - Sorting", () => {
    const code = `/**
 * Find third largest distinct value
 * @param {number[]} nums - Array of integers
 * @return {number} - Third largest distinct value, or largest if doesn't exist
 */
function thirdMax(nums) {
  // Get distinct values and sort in descending order
  const distinct = Array.from(new Set(nums)).sort((a, b) => b - a);
  
  // If we have at least 3 distinct values, return the third
  if (distinct.length >= 3) {
    return distinct[2];
  }
  
  // Otherwise, return the largest (first element)
  return distinct[0];
}

// Test cases
console.log('Example 1:', thirdMax([1, 4, 2, 3, 5])); // 3
console.log('Example 2:', thirdMax([2, 3, 3, 5])); // 2
console.log('Example 3:', thirdMax([9, 5])); // 9
console.log('Example 4:', thirdMax([2, 2, 3, 1])); // 1
console.log('Test 5:', thirdMax([3, 2, 1])); // 1
console.log('Test 6:', thirdMax([1, 1, 2])); // 1`;
    const testCases = [
  {
    "input": "thirdMax([1, 4, 2, 3, 5])",
    "expected": "3"
  },
  {
    "input": "thirdMax([2, 3, 3, 5])",
    "expected": "2"
  },
  {
    "input": "thirdMax([9, 5])",
    "expected": "9"
  },
  {
    "input": "thirdMax([2, 2, 3, 1])",
    "expected": "1"
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
