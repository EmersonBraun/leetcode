// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("knapsack", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Solve 0/1 knapsack problem
 * @param {number} W - Maximum weight capacity
 * @param {number[]} weights - Array of weights
 * @param {number[]} values - Array of values
 * @return {number} - Maximum value
 */
function knapsack(W, weights, values) {
  const n = weights.length;
  
  // dp[i][w] = maximum value using first i items with capacity w
  const dp = Array(n + 1).fill().map(() => Array(W + 1).fill(0));
  
  // Fill DP table
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      // Option 1: Don't take current item
      dp[i][w] = dp[i - 1][w];
      
      // Option 2: Take current item (if it fits)
      const currentWeight = weights[i - 1];
      const currentValue = values[i - 1];
      
      if (currentWeight <= w) {
        dp[i][w] = Math.max(
          dp[i][w], // Don't take
          dp[i - 1][w - currentWeight] + currentValue // Take
        );
      }
    }
  }
  
  return dp[n][W];
}

// Test cases
console.log('Example 1:', knapsack(10, [4, 1, 3], [4, 2, 7])); 
// 13

console.log('Example 2:', knapsack(5, [2, 4, 3], [3, 7, 2])); 
// 7

console.log('Example 3:', knapsack(7, [1, 3, 4], [3, 5, 6])); 
// 11`;
    const testCases = [
  {
    "input": "knapsack(10, [4, 1, 3], [4, 2, 7])",
    "expected": "13"
  },
  {
    "input": "knapsack(5, [2, 4, 3], [3, 7, 2])",
    "expected": "7"
  },
  {
    "input": "knapsack(7, [1, 3, 4], [3, 5, 6])",
    "expected": "11"
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
