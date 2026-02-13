// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("remove-element", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Remove all instances of val from array in-place
 * @param {number[]} nums - Array of integers
 * @param {number} val - Value to remove
 * @return {number} - New length of array after removal
 */
function removeElement(nums, val) {
  let writeIndex = 0; // Position to write next valid element
  
  // Iterate through the array
  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    // If current element is not the value to remove
    if (nums[readIndex] !== val) {
      // Copy it to the write position
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }
  
  return writeIndex;
}

// Test cases
let nums1 = [1, 2, 3];
console.log('Example 1:', removeElement(nums1, 2)); // 2
console.log('Array:', nums1); // [1, 3, 3]

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log('Example 2:', removeElement(nums2, 2)); // 5
console.log('Array:', nums2); // [0, 1, 3, 0, 4, ...]

let nums3 = [3, 2, 2, 3];
console.log('Example 3:', removeElement(nums3, 3)); // 2
console.log('Array:', nums3); // [2, 2, ...]

let nums4 = [1];
console.log('Example 4:', removeElement(nums4, 1)); // 0
console.log('Array:', nums4); // [1] (but length is 0)`;
    const testCases = [
  {
    "input": "(() => { const n = [1, 2, 3]; return removeElement(n, 2); })()",
    "expected": "2"
  },
  {
    "input": "(() => { const n = [0, 1, 2, 2, 3, 0, 4, 2]; return removeElement(n, 2); })()",
    "expected": "5"
  },
  {
    "input": "(() => { const n = [3, 2, 2, 3]; return removeElement(n, 3); })()",
    "expected": "2"
  },
  {
    "input": "(() => { const n = [1]; return removeElement(n, 1); })()",
    "expected": "0"
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
