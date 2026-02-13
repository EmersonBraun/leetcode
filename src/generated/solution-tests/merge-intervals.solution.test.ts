// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("merge-intervals", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Merge overlapping intervals
 * @param {number[][]} intervals - Array of [start, end] intervals
 * @return {number[][]} - Merged intervals
 */
function merge(intervals) {
  // Edge case: empty or single interval
  if (intervals.length <= 1) {
    return intervals;
  }
  
  // Sort intervals by start time (and end time as tiebreaker)
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]; // Sort by start time
    }
    return a[1] - b[1]; // If start times equal, sort by end time
  });
  
  const merged = [];
  merged.push(intervals[0]); // Add first interval
  
  // Iterate through remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];
    
    // Check if current interval overlaps with last merged interval
    // Overlap if: current.start <= lastMerged.end
    if (current[0] <= lastMerged[1]) {
      // Merge: update end time to maximum of both
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, add as new interval
      merged.push(current);
    }
  }
  
  return merged;
}

// Test cases
console.log('Example 1:', merge([[1, 3], [1, 8]])); 
// [[1, 8]]

console.log('Example 2:', merge([[1, 2], [2, 6], [7, 10]])); 
// [[1, 6], [7, 10]]

console.log('Example 3:', merge([[1, 4], [4, 5]])); 
// [[1, 5]]

console.log('Example 4:', merge([[1, 3], [2, 6], [8, 10], [15, 18]])); 
// [[1, 6], [8, 10], [15, 18]]

console.log('Test 5:', merge([[1, 4], [0, 4]])); 
// [[0, 4]]

console.log('Test 6:', merge([[1, 4], [0, 1]])); 
// [[0, 4]]`;
    const testCases = [
  {
    "input": "JSON.stringify(merge([[1, 3], [1, 8]]))",
    "expected": "[[1,8]]"
  },
  {
    "input": "JSON.stringify(merge([[1, 2], [2, 6], [7, 10]]))",
    "expected": "[[1,6],[7,10]]"
  },
  {
    "input": "JSON.stringify(merge([[1, 4], [4, 5]]))",
    "expected": "[[1,5]]"
  },
  {
    "input": "JSON.stringify(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))",
    "expected": "[[1,6],[8,10],[15,18]]"
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
