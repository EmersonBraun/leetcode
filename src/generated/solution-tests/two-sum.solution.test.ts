// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("two-sum", () => {
  describe("JavaScript Brute Force Solution", () => {
    const code = `/**
 * Find two numbers that add up to target using brute force
 * @param {number[]} nums - Input array
 * @param {number} target - Target sum
 * @return {number[]} - Indices of the two numbers
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Test cases
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]
console.log(twoSum([1,5,8,10], 9)); // [0,2]`;
    const testCases = [
  {
    "input": "twoSum([2,7,11,15], 9)",
    "expected": "[0,1]"
  },
  {
    "input": "twoSum([3,2,4], 6)",
    "expected": "[1,2]"
  },
  {
    "input": "twoSum([3,3], 6)",
    "expected": "[0,1]"
  },
  {
    "input": "twoSum([1,5,8,10], 9)",
    "expected": "[0,2]"
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
  describe("JavaScript Optimized Solution", () => {
    const code = `/**
 * Find two numbers that add up to target using hash map
 * @param {number[]} nums - Input array
 * @param {number} target - Target sum
 * @return {number[]} - Indices of the two numbers
 */
function twoSumOptimized(nums, target) {
  const numToIndex = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(nums[i], i);
  }
}

// Test cases
console.log(twoSumOptimized([2,7,11,15], 9)); // [0,1]
console.log(twoSumOptimized([3,2,4], 6)); // [1,2]
console.log(twoSumOptimized([3,3], 6)); // [0,1]
console.log(twoSumOptimized([1,5,8,10], 9)); // [0,2]`;
    const testCases = [
  {
    "input": "twoSumOptimized([2,7,11,15], 9)",
    "expected": "[0,1]"
  },
  {
    "input": "twoSumOptimized([3,2,4], 6)",
    "expected": "[1,2]"
  },
  {
    "input": "twoSumOptimized([3,3], 6)",
    "expected": "[0,1]"
  },
  {
    "input": "twoSumOptimized([1,5,8,10], 9)",
    "expected": "[0,2]"
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
