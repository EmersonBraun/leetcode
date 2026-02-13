// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("minimum-path-sum", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Find minimum path sum from top-left to bottom-right
 * @param {number[][]} grid - 2D matrix of costs
 * @return {number} - Minimum path sum
 */
function minPathSum(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  
  const rows = grid.length;
  const cols = grid[0].length;
  
  // Create DP table
  const dp = Array(rows).fill().map(() => Array(cols).fill(0));
  
  // Base case: top-left corner
  dp[0][0] = grid[0][0];
  
  // Fill first row: can only come from left
  for (let j = 1; j < cols; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  
  // Fill first column: can only come from top
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  
  // Fill rest of the table
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      // Minimum of coming from top or left
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  
  return dp[rows - 1][cols - 1];
}

// Test cases
const grid1 = [
  [1, 1, 3],
  [2, 3, 1],
  [4, 6, 1]
];
console.log('Example 1:', minPathSum(grid1)); 
// 7

const grid2 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
console.log('Example 2:', minPathSum(grid2)); 
// 7

const grid3 = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log('Example 3:', minPathSum(grid3)); 
// 12`;
    const testCases = [
  {
    "input": "minPathSum([[1,1,3],[2,3,1],[4,6,1]])",
    "expected": "7"
  },
  {
    "input": "minPathSum([[1,3,1],[1,5,1],[4,2,1]])",
    "expected": "7"
  },
  {
    "input": "minPathSum([[1,2,3],[4,5,6]])",
    "expected": "12"
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
