// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("three-sum", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Find all unique triplets that sum to zero
 * @param {number[]} nums - Array of integers
 * @return {number[][]} - Array of triplets that sum to zero
 */
function threeSum(nums) {
  const result = [];
  const n = nums.length;
  
  // Need at least 3 numbers
  if (n < 3) {
    return result;
  }
  
  // Sort the array to enable two-pointer technique
  nums.sort((a, b) => a - b);
  
  // Fix the first element of the triplet
  for (let i = 0; i < n - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    // Two pointers for the remaining two elements
    let left = i + 1;
    let right = n - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        // Found a valid triplet
        result.push([nums[i], nums[left], nums[right]]);
        
        // Skip duplicates for left pointer
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // Skip duplicates for right pointer
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        
        // Move both pointers
        left++;
        right--;
      } else if (sum < 0) {
        // Sum is too small, need larger numbers
        left++;
      } else {
        // Sum is too large, need smaller numbers
        right--;
      }
    }
  }
  
  return result;
}

// Test cases
console.log('Example 1:', threeSum([0])); // []
console.log('Example 2:', threeSum([0, -1, 1, 1, 2, -2])); // [[-2,0,2],[-2,1,1],[-1,0,1]]
console.log('Example 3:', threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log('Example 4:', threeSum([0, 0, 0])); // [[0,0,0]]
console.log('Test 5:', threeSum([-2, 0, 1, 1, 2])); // [[-2,0,2],[-2,1,1]]`;
    const testCases = [
  {
    "input": "JSON.stringify(threeSum([0]))",
    "expected": "[]"
  },
  {
    "input": "JSON.stringify(threeSum([0, -1, 1, 1, 2, -2]))",
    "expected": "[[-2,0,2],[-2,1,1],[-1,0,1]]"
  },
  {
    "input": "JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4]))",
    "expected": "[[-1,-1,2],[-1,0,1]]"
  },
  {
    "input": "JSON.stringify(threeSum([0, 0, 0]))",
    "expected": "[[0,0,0]]"
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
