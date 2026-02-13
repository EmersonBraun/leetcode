// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("monotonic-array", () => {
  describe("JavaScript Solution - Two Flags", () => {
    const code = `/**
 * Check if array is monotonic (increasing or decreasing)
 * @param {number[]} nums - Input array
 * @return {boolean} - True if array is monotonic
 */
function isMonotonic(nums) {
  if (nums.length <= 1) return true;
  
  let isIncreasing = true;
  let isDecreasing = true;
  
  // Check each pair of adjacent elements
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // Found an increase, not decreasing
      isDecreasing = false;
    } else if (nums[i] < nums[i - 1]) {
      // Found a decrease, not increasing
      isIncreasing = false;
    }
    // If nums[i] === nums[i-1], both flags remain unchanged
  }
  
  // Array is monotonic if it's either increasing or decreasing
  return isIncreasing || isDecreasing;
}

// Test cases
console.log('Example 1:', isMonotonic([1, 2, 3, 4, 4, 5])); 
// true (increasing)

console.log('Example 2:', isMonotonic([7, 6, 3])); 
// true (decreasing)

console.log('Example 3:', isMonotonic([8, 4, 6])); 
// false (neither)

console.log('Example 4:', isMonotonic([1, 1, 1, 1])); 
// true (both)

console.log('Test 5:', isMonotonic([1])); 
// true`;
    const testCases = [
  {
    "input": "isMonotonic([1, 2, 3, 4, 4, 5])",
    "expected": "true"
  },
  {
    "input": "isMonotonic([7, 6, 3])",
    "expected": "true"
  },
  {
    "input": "isMonotonic([8, 4, 6])",
    "expected": "false"
  },
  {
    "input": "isMonotonic([1, 1, 1, 1])",
    "expected": "true"
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
