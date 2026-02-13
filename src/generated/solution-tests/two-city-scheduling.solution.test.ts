// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("two-city-scheduling", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Find minimum cost to send half employees to each office
 * @param {number[][]} prices - prices[i][0] = cost to A, prices[i][1] = cost to B
 * @return {number} - Minimum total cost
 */
function twoCityScheduling(prices) {
  const n = prices.length;
  const half = n / 2;
  
  // dp[i][j] = minimum cost to assign first i employees with j employees sent to office A
  const dp = Array(n + 1).fill().map(() => Array(half + 1).fill(Infinity));
  
  // Base case: no employees, no cost
  dp[0][0] = 0;
  
  // Fill DP table
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= Math.min(i, half); j++) {
      // Option 1: Send employee i-1 to office A
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + prices[i - 1][0]);
      }
      
      // Option 2: Send employee i-1 to office B
      // Number sent to B = (i - 1) - (j) = i - 1 - j
      // We need at most half to B, so i - 1 - j <= half
      if (i - 1 - j < half) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + prices[i - 1][1]);
      }
    }
  }
  
  return dp[n][half];
}

// Test cases
console.log('Example 1:', twoCityScheduling([[40, 30], [300, 200], [50, 50], [30, 60]])); 
// 310

console.log('Example 2:', twoCityScheduling([[10, 20], [30, 200], [400, 50], [30, 20]])); 
// 110`;
    const testCases = [
  {
    "input": "twoCityScheduling([[40, 30], [300, 200], [50, 50], [30, 60]])",
    "expected": "310"
  },
  {
    "input": "twoCityScheduling([[10, 20], [30, 200], [400, 50], [30, 20]])",
    "expected": "110"
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
