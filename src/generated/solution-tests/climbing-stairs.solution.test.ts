// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("climbing-stairs", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Count ways to climb N steps (1 or 2 steps at a time)
 * @param {number} N - Number of steps
 * @return {number} - Total number of ways
 */
function climbStairs(N) {
  if (N <= 1) return 1;
  if (N === 2) return 2;
  
  // dp[i] = number of ways to reach step i
  const dp = new Array(N + 1);
  dp[0] = 1; // Base case: 1 way to be at ground (start)
  dp[1] = 1; // Base case: 1 way to reach step 1
  dp[2] = 2; // Base case: 2 ways to reach step 2
  
  // Fill DP table
  for (let i = 3; i <= N; i++) {
    // To reach step i, can come from step i-1 (1 step) or step i-2 (2 steps)
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[N];
}

// Test cases
console.log('Example 1:', climbStairs(2)); 
// 2

console.log('Example 2:', climbStairs(3)); 
// 3

console.log('Example 3:', climbStairs(4)); 
// 5

console.log('Example 4:', climbStairs(1)); 
// 1`;
    const testCases = [
  {
    "input": "climbStairs(2)",
    "expected": "2"
  },
  {
    "input": "climbStairs(3)",
    "expected": "3"
  },
  {
    "input": "climbStairs(4)",
    "expected": "5"
  },
  {
    "input": "climbStairs(1)",
    "expected": "1"
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
