// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("paint-house", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Find minimum cost to paint houses with no adjacent same color
 * @param {number[][]} costs - costs[i][0]=red, costs[i][1]=blue, costs[i][2]=green
 * @return {number} - Minimum cost
 */
function minCost(costs) {
  if (!costs || costs.length === 0) return 0;
  
  const n = costs.length;
  const RED = 0, BLUE = 1, GREEN = 2;
  
  // dp[i][color] = minimum cost to paint first i+1 houses where house i is painted with color
  const dp = Array(n).fill().map(() => Array(3).fill(0));
  
  // Base case: first house
  dp[0][RED] = costs[0][RED];
  dp[0][BLUE] = costs[0][BLUE];
  dp[0][GREEN] = costs[0][GREEN];
  
  // Fill DP table
  for (let i = 1; i < n; i++) {
    // Paint house i red: previous house must be blue or green
    dp[i][RED] = costs[i][RED] + Math.min(dp[i - 1][BLUE], dp[i - 1][GREEN]);
    
    // Paint house i blue: previous house must be red or green
    dp[i][BLUE] = costs[i][BLUE] + Math.min(dp[i - 1][RED], dp[i - 1][GREEN]);
    
    // Paint house i green: previous house must be red or blue
    dp[i][GREEN] = costs[i][GREEN] + Math.min(dp[i - 1][RED], dp[i - 1][BLUE]);
  }
  
  // Return minimum cost for last house
  return Math.min(dp[n - 1][RED], dp[n - 1][BLUE], dp[n - 1][GREEN]);
}

// Test cases
console.log('Example 1:', minCost([[1, 3, 5], [2, 4, 6], [5, 4, 3]])); 
// 8

console.log('Example 2:', minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]])); 
// 10

console.log('Example 3:', minCost([[7, 6, 2]])); 
// 2`;
    const testCases = [
  {
    "input": "minCost([[1, 3, 5], [2, 4, 6], [5, 4, 3]])",
    "expected": "8"
  },
  {
    "input": "minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]])",
    "expected": "10"
  },
  {
    "input": "minCost([[7, 6, 2]])",
    "expected": "2"
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
