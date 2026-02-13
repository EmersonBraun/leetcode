// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("best-time-to-buy-and-sell-stock-ii", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Calculate maximum profit from multiple stock transactions
 * @param {number[]} prices - Array of stock prices
 * @return {number} - Maximum profit
 */
function maxProfit(prices) {
  let profit = 0;
  
  // Iterate through prices, looking for price increases
  for (let i = 1; i < prices.length; i++) {
    // If price increased, add the profit
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  
  return profit;
}

// Test cases
console.log('Example 1:', maxProfit([8, 3, 2, 4, 6, 4, 5])); // 5
console.log('Example 2:', maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log('Example 3:', maxProfit([1, 2, 3, 4, 5])); // 4
console.log('Example 4:', maxProfit([7, 6, 4, 3, 1])); // 0
console.log('Test 5:', maxProfit([1, 2, 3, 2, 1])); // 2`;
    const testCases = [
  {
    "input": "maxProfit([8, 3, 2, 4, 6, 4, 5])",
    "expected": "5"
  },
  {
    "input": "maxProfit([7, 1, 5, 3, 6, 4])",
    "expected": "7"
  },
  {
    "input": "maxProfit([1, 2, 3, 4, 5])",
    "expected": "4"
  },
  {
    "input": "maxProfit([7, 6, 4, 3, 1])",
    "expected": "0"
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
