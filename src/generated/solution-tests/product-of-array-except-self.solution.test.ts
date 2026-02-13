// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("product-of-array-except-self", () => {
  describe("JavaScript Solution - Two Passes", () => {
    const code = `/**
 * Product of array except self
 * @param {number[]} nums - Input array
 * @return {number[]} - Array where result[i] = product of all except nums[i]
 */
function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);
  
  // First pass: Calculate left products
  // result[i] = product of all elements to the left of i
  result[0] = 1; // No elements to the left of index 0
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  
  // Second pass: Calculate right products and multiply with left products
  // rightProduct = product of all elements to the right of i
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    rightProduct = rightProduct * nums[i];
  }
  
  return result;
}

// Test cases
console.log('Example 1:', productExceptSelf([1, 2, 3])); 
// [6, 3, 2]

console.log('Example 2:', productExceptSelf([-1, 1, 0, -3, 3])); 
// [0, 0, 9, 0, 0]

console.log('Example 3:', productExceptSelf([2, 3, 4, 5])); 
// [60, 40, 30, 24]

console.log('Test 4:', productExceptSelf([1, 0])); 
// [0, 1]`;
    const testCases = [
  {
    "input": "JSON.stringify(productExceptSelf([1, 2, 3]))",
    "expected": "[6,3,2]"
  },
  {
    "input": "JSON.stringify(productExceptSelf([-1, 1, 0, -3, 3]))",
    "expected": "[0,0,9,0,0]"
  },
  {
    "input": "JSON.stringify(productExceptSelf([2, 3, 4, 5]))",
    "expected": "[60,40,30,24]"
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
