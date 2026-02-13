// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("unique-paths", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Find number of unique paths from top-left to bottom-right
 * @param {number} M - Number of rows
 * @param {number} N - Number of columns
 * @return {number} - Number of unique paths
 */
function uniquePaths(M, N) {
  // dp[i][j] = number of ways to reach cell (i, j)
  const dp = Array(M).fill().map(() => Array(N).fill(0));
  
  // Base case: starting position
  dp[0][0] = 1;
  
  // Fill first row: can only come from left
  for (let j = 1; j < N; j++) {
    dp[0][j] = 1;
  }
  
  // Fill first column: can only come from top
  for (let i = 1; i < M; i++) {
    dp[i][0] = 1;
  }
  
  // Fill rest of the table
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      // Can come from top (i-1, j) or left (i, j-1)
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  
  return dp[M - 1][N - 1];
}

// Test cases
console.log('Example 1:', uniquePaths(2, 2)); 
// 2

console.log('Example 2:', uniquePaths(4, 3)); 
// 10

console.log('Example 3:', uniquePaths(3, 7)); 
// 28

console.log('Example 4:', uniquePaths(1, 1)); 
// 1`;
    const testCases = [
  {
    "input": "uniquePaths(2, 2)",
    "expected": "2"
  },
  {
    "input": "uniquePaths(4, 3)",
    "expected": "10"
  },
  {
    "input": "uniquePaths(3, 7)",
    "expected": "28"
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
