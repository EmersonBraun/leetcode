// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("move-zeroes", () => {
  describe("JavaScript Solution - Two Pointers", () => {
    const code = `/**
 * Move all zeros to the end
 * @param {number[]} nums - Input array (modified in-place)
 * @return {void} - Modifies array in-place
 */
function moveZeroes(nums) {
  let slow = 0; // Points to next position for non-zero element
  
  // Move all non-zero elements to the front
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // Swap or copy non-zero element to slow pointer position
      if (slow !== fast) {
        nums[slow] = nums[fast];
      }
      slow++;
    }
  }
  
  // Fill remaining positions with zeros
  while (slow < nums.length) {
    nums[slow] = 0;
    slow++;
  }
}

// Test cases
let nums1 = [3, 7, 0, 5, 0, 2];
moveZeroes(nums1);
console.log('Example 1:', nums1); 
// [3, 7, 5, 2, 0, 0]

let nums2 = [0, 1, 0, 3, 12];
moveZeroes(nums2);
console.log('Example 2:', nums2); 
// [1, 3, 12, 0, 0]

let nums3 = [0, 0, 1];
moveZeroes(nums3);
console.log('Example 3:', nums3); 
// [1, 0, 0]`;
    const testCases = [
  {
    "input": "(nums => { moveZeroes(nums); return nums; })([3, 7, 0, 5, 0, 2])",
    "expected": "[3,7,5,2,0,0]"
  },
  {
    "input": "(nums => { moveZeroes(nums); return nums; })([0, 1, 0, 3, 12])",
    "expected": "[1,3,12,0,0]"
  },
  {
    "input": "(nums => { moveZeroes(nums); return nums; })([0, 0, 1])",
    "expected": "[1,0,0]"
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
