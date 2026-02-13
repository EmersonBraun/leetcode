// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("predict-the-winner", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Check if player 1 can win
 * @param {number[]} nums - Array of numbers
 * @return {boolean} - Whether player 1 wins
 */
function predictTheWinner(nums) {
  const n = nums.length;
  
  // dp[i][j] = maximum score difference player 1 can achieve over player 2
  // for subarray nums[i...j] (player 1's score - player 2's score)
  const dp = Array(n).fill().map(() => Array(n).fill(0));
  
  // Base case: single element, player 1 gets it
  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i];
  }
  
  // Fill DP table: length from 2 to n
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      
      // Player 1 can pick either end:
      // Option 1: Pick left (nums[i]), player 2 gets optimal for nums[i+1...j]
      // Option 2: Pick right (nums[j]), player 2 gets optimal for nums[i...j-1]
      // Score difference = chosen value - opponent's optimal difference
      dp[i][j] = Math.max(
        nums[i] - dp[i + 1][j],  // Pick left
        nums[j] - dp[i][j - 1]   // Pick right
      );
    }
  }
  
  // If dp[0][n-1] >= 0, player 1 wins (or ties)
  return dp[0][n - 1] >= 0;
}

// Test cases
console.log('Example 1:', predictTheWinner([1, 2, 3])); 
// true

console.log('Example 2:', predictTheWinner([1, 5, 2])); 
// false

console.log('Example 3:', predictTheWinner([1, 5, 233, 7])); 
// true

console.log('Example 4:', predictTheWinner([1, 1])); 
// true`;
    const testCases = [
  {
    "input": "predictTheWinner([1, 2, 3])",
    "expected": "true"
  },
  {
    "input": "predictTheWinner([1, 5, 2])",
    "expected": "false"
  },
  {
    "input": "predictTheWinner([1, 1])",
    "expected": "true"
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
