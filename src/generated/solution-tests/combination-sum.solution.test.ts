// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("combination-sum", () => {
  describe("JavaScript Solution - Backtracking", () => {
    const code = `/**
 * Find all unique combinations that sum to target
 * @param {number[]} numbers - Array of positive numbers
 * @param {number} target - Target sum
 * @return {number[][]} - All unique combinations
 */
function combinationSum(numbers, target) {
  const result = [];
  const current = [];
  
  // Sort numbers to avoid duplicates and enable early termination
  const sorted = [...numbers].sort((a, b) => a - b);
  
  /**
   * Backtracking function
   * @param {number} start - Start index (to avoid duplicates)
   * @param {number} remaining - Remaining target sum
   */
  function backtrack(start, remaining) {
    // Base case: found a valid combination
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    
    // Try each number starting from 'start' index
    for (let i = start; i < sorted.length; i++) {
      const num = sorted[i];
      
      // Early termination: if current number is too large, skip
      if (num > remaining) {
        break; // Since sorted, all remaining numbers are also too large
      }
      
      // Use this number
      current.push(num);
      
      // Recursively search with remaining target
      // Use 'i' (not 'i+1') because we can reuse the same number
      backtrack(i, remaining - num);
      
      // Backtrack: remove last added number
      current.pop();
    }
  }
  
  backtrack(0, target);
  return result;
}

// Test cases
console.log('Example 1:', combinationSum([2, 4, 6, 3], 6)); 
// [[2,2,2], [2,4], [3,3], [6]]

console.log('Example 2:', combinationSum([2, 3, 6, 7], 7)); 
// [[2,2,3], [7]]

console.log('Example 3:', combinationSum([2], 1)); 
// []

console.log('Example 4:', combinationSum([1], 2)); 
// [[1,1]]`;
    const testCases = [
  {
    "input": "JSON.stringify(combinationSum([2, 4, 6, 3], 6))",
    "expected": "[[2,2,2],[2,4],[3,3],[6]]"
  },
  {
    "input": "JSON.stringify(combinationSum([2, 3, 6, 7], 7))",
    "expected": "[[2,2,3],[7]]"
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
