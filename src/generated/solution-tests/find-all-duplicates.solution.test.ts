// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("find-all-duplicates", () => {
  describe("JavaScript Solution - Array as Hash Map", () => {
    const code = `/**
 * Find all numbers that appear twice
 * @param {number[]} nums - Array of integers (1 to n)
 * @return {number[]} - Array of numbers that appear twice
 */
function findDuplicates(nums) {
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    // Use absolute value since we might have negated it
    const index = Math.abs(nums[i]) - 1;
    
    // If value at index is negative, we've seen this number before
    if (nums[index] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      // Mark as seen by negating
      nums[index] = -nums[index];
    }
  }
  
  return result;
}

// Test cases
console.log('Example 1:', findDuplicates([2, 3, 1, 5, 5])); // [5]
console.log('Example 2:', findDuplicates([1, 2, 3])); // []
console.log('Example 3:', findDuplicates([7, 2, 2, 3, 3, 4, 4])); // [2, 3, 4]
console.log('Test 4:', findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]`;
    const testCases = [
  {
    "input": "JSON.stringify(findDuplicates([2, 3, 1, 5, 5]))",
    "expected": "[5]"
  },
  {
    "input": "JSON.stringify(findDuplicates([1, 2, 3]))",
    "expected": "[]"
  },
  {
    "input": "JSON.stringify(findDuplicates([7, 2, 2, 3, 3, 4, 4]))",
    "expected": "[2,3,4]"
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
