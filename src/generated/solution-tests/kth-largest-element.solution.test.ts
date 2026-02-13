// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("kth-largest-element", () => {
  describe("JavaScript Solution - Sorting", () => {
    const code = `/**
 * Find kth largest element using sorting
 * @param {number[]} nums - Input array
 * @param {number} k - Kth largest position
 * @return {number} - Kth largest element
 */
function findKthLargest(nums, k) {
  // Sort in descending order
  nums.sort((a, b) => b - a);
  
  // Return kth element (0-indexed, so k-1)
  return nums[k - 1];
}

// Test cases
console.log('Example 1:', findKthLargest([1, 2, 3], 1)); 
// 3

console.log('Example 2:', findKthLargest([9, 2, 1, 7, 3, 2], 5)); 
// 2

console.log('Example 3:', findKthLargest([3, 2, 1, 5, 6, 4], 2)); 
// 5`;
    const testCases = [
  {
    "input": "findKthLargest([1, 2, 3], 1)",
    "expected": "3"
  },
  {
    "input": "findKthLargest([9, 2, 1, 7, 3, 2], 5)",
    "expected": "2"
  },
  {
    "input": "findKthLargest([3, 2, 1, 5, 6, 4], 2)",
    "expected": "5"
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
