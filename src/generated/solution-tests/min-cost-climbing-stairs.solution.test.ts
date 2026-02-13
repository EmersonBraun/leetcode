// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("min-cost-climbing-stairs", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Find minimum cost to climb stairs
 * @param {number[]} cost - Cost array for each step
 * @return {number} - Minimum cost to reach top
 */
function minCostClimbingStairs(cost) {
  const n = cost.length;
  
  // dp[i] = minimum cost to reach step i
  const dp = new Array(n);
  
  // Base cases: can start from step 0 or step 1
  dp[0] = cost[0];
  dp[1] = cost[1];
  
  // Fill DP table
  for (let i = 2; i < n; i++) {
    // To reach step i, can come from step i-1 or step i-2
    // Cost = cost[i] + minimum of previous steps
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  
  // Can reach top from last step (n-1) or second-to-last step (n-2)
  return Math.min(dp[n - 1], dp[n - 2]);
}

// Test cases
console.log('Example 1:', minCostClimbingStairs([5, 10, 20])); 
// 10

console.log('Example 2:', minCostClimbingStairs([1, 5, 10, 3, 7, 2])); 
// 10

console.log('Example 3:', minCostClimbingStairs([10, 15, 20])); 
// 15

console.log('Example 4:', minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); 
// 6`;
    const testCases = [
  {
    "input": "minCostClimbingStairs([5, 10, 20])",
    "expected": "10"
  },
  {
    "input": "minCostClimbingStairs([1, 5, 10, 3, 7, 2])",
    "expected": "10"
  },
  {
    "input": "minCostClimbingStairs([10, 15, 20])",
    "expected": "15"
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
