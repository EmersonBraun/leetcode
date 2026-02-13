// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("contains-duplicate-ii", () => {
  describe("JavaScript Solution - Hash Map", () => {
    const code = `/**
 * Check if duplicate exists within k distance
 * @param {number[]} nums - Input array
 * @param {number} k - Maximum distance allowed
 * @return {boolean} - True if duplicate within k distance
 */
function containsNearbyDuplicate(nums, k) {
  const indexMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    
    // Check if we've seen this number before
    if (indexMap.has(num)) {
      const lastIndex = indexMap.get(num);
      // Check if distance is within k
      if (i - lastIndex <= k) {
        return true;
      }
    }
    
    // Update the most recent index for this number
    indexMap.set(num, i);
  }
  
  return false;
}

// Test cases
console.log('Example 1:', containsNearbyDuplicate([1, 2, 1], 1)); 
// false

console.log('Example 2:', containsNearbyDuplicate([2, 3, 2], 2)); 
// true

console.log('Example 3:', containsNearbyDuplicate([1, 0, 1, 1], 1)); 
// true

console.log('Test 4:', containsNearbyDuplicate([1, 2, 3, 1], 3)); 
// true`;
    const testCases = [
  {
    "input": "containsNearbyDuplicate([1, 2, 1], 1)",
    "expected": "false"
  },
  {
    "input": "containsNearbyDuplicate([2, 3, 2], 2)",
    "expected": "true"
  },
  {
    "input": "containsNearbyDuplicate([1, 0, 1, 1], 1)",
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
  describe("JavaScript Alternative - Sliding Window with Set", () => {
    const code = `/**
 * Sliding window with set approach
 */
function containsNearbyDuplicateSet(nums, k) {
  const window = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    // Remove element that's too far away (outside k distance)
    if (i > k) {
      window.delete(nums[i - k - 1]);
    }
    
    // If current element is in window, we found a duplicate within k
    if (window.has(nums[i])) {
      return true;
    }
    
    // Add current element to window
    window.add(nums[i]);
  }
  
  return false;
}

// Test cases
console.log('Example 1:', containsNearbyDuplicateSet([1, 2, 1], 1)); // false
console.log('Example 2:', containsNearbyDuplicateSet([2, 3, 2], 2)); // true
console.log('Example 3:', containsNearbyDuplicateSet([1, 0, 1, 1], 1)); // true`;
    const testCases = [
  {
    "input": "containsNearbyDuplicateSet([1, 2, 1], 1)",
    "expected": "false"
  },
  {
    "input": "containsNearbyDuplicateSet([2, 3, 2], 2)",
    "expected": "true"
  },
  {
    "input": "containsNearbyDuplicateSet([1, 0, 1, 1], 1)",
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
