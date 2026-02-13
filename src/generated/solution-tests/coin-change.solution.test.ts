// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("coin-change", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Find minimum number of coins to make amount
 * @param {number[]} coins - Array of coin denominations
 * @param {number} amount - Target amount
 * @return {number} - Minimum number of coins, or -1 if not possible
 */
function coinChange(coins, amount) {
  // dp[i] = minimum number of coins to make amount i
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Base case: 0 coins needed for amount 0
  
  // Fill DP table
  for (let i = 1; i <= amount; i++) {
    // Try each coin denomination
    for (const coin of coins) {
      // If coin is not larger than current amount
      if (coin <= i) {
        // Update dp[i] with minimum coins needed
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  
  // Return result or -1 if not possible
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Test cases
console.log('Example 1:', coinChange([1, 5, 10, 25], 78)); 
// 6

console.log('Example 2:', coinChange([1, 2, 5], 11)); 
// 3

console.log('Example 3:', coinChange([2], 3)); 
// -1

console.log('Example 4:', coinChange([1], 0)); 
// 0`;
    const testCases = [
  {
    "input": "coinChange([1, 5, 10, 25], 78)",
    "expected": "6"
  },
  {
    "input": "coinChange([1, 2, 5], 11)",
    "expected": "3"
  },
  {
    "input": "coinChange([2], 3)",
    "expected": "-1"
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
