// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("container-with-most-water", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Find the container with the most water
 * @param {number[]} heights - Array of non-negative integers representing heights
 * @return {number} - Maximum water volume
 */
function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxWater = 0;
  
  while (left < right) {
    // Calculate current area
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;
    
    // Update maximum
    maxWater = Math.max(maxWater, area);
    
    // Move pointer with smaller height
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxWater;
}

// Test cases
console.log('Example 1:', maxArea([1, 4, 4, 8, 2])); // 8
console.log('Example 2:', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log('Example 3:', maxArea([1, 1])); // 1
console.log('Example 4:', maxArea([2, 3, 4, 5, 18, 17, 6])); // 17
console.log('Test 5:', maxArea([1, 2, 1])); // 2`;
    const testCases = [
  {
    "input": "maxArea([1, 4, 4, 8, 2])",
    "expected": "8"
  },
  {
    "input": "maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])",
    "expected": "49"
  },
  {
    "input": "maxArea([1, 1])",
    "expected": "1"
  },
  {
    "input": "maxArea([2, 3, 4, 5, 18, 17, 6])",
    "expected": "17"
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
  describe("JavaScript Brute Force Solution", () => {
    const code = `/**
 * Brute force solution - O(n²) time
 * Check all possible pairs
 */
function maxAreaBruteForce(heights) {
  let maxWater = 0;
  const n = heights.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const width = j - i;
      const height = Math.min(heights[i], heights[j]);
      const area = width * height;
      maxWater = Math.max(maxWater, area);
    }
  }
  
  return maxWater;
}

// Test cases
console.log('Example 1:', maxAreaBruteForce([1, 4, 4, 8, 2])); // 8
console.log('Example 2:', maxAreaBruteForce([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log('Example 3:', maxAreaBruteForce([1, 1])); // 1
console.log('Example 4:', maxAreaBruteForce([2, 3, 4, 5, 18, 17, 6])); // 17`;
    const testCases = [
  {
    "input": "maxAreaBruteForce([1, 4, 4, 8, 2])",
    "expected": "8"
  },
  {
    "input": "maxAreaBruteForce([1, 8, 6, 2, 5, 4, 8, 3, 7])",
    "expected": "49"
  },
  {
    "input": "maxAreaBruteForce([1, 1])",
    "expected": "1"
  },
  {
    "input": "maxAreaBruteForce([2, 3, 4, 5, 18, 17, 6])",
    "expected": "17"
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
