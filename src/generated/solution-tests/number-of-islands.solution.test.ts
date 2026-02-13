// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("number-of-islands", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Count number of islands
 * @param {number[][]} grid - 2D array (1=land, 0=water)
 * @return {number} - Number of islands
 */
function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  
  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;
  
  /**
   * DFS to mark all connected land as visited
   * @param {number} row - Current row
   * @param {number} col - Current column
   */
  function dfs(row, col) {
    // Check bounds and if cell is land
    if (
      row < 0 || row >= rows ||
      col < 0 || col >= cols ||
      grid[row][col] === 0
    ) {
      return;
    }
    
    // Mark as visited (set to 0)
    grid[row][col] = 0;
    
    // Explore 4 directions (horizontally and vertically)
    dfs(row - 1, col); // up
    dfs(row + 1, col); // down
    dfs(row, col - 1); // left
    dfs(row, col + 1); // right
  }
  
  // Traverse all cells
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        // Found a new island
        islandCount++;
        dfs(i, j); // Mark all connected land as visited
      }
    }
  }
  
  return islandCount;
}

// Test cases
const grid1 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1]
];
console.log('Example 1:', numIslands(grid1)); 
// 3

const grid2 = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0]
];
console.log('Example 2:', numIslands(grid2)); 
// 4`;
    const testCases = [
  {
    "input": "numIslands([[1,1,0,0,0],[1,1,0,1,0],[1,1,0,0,1]])",
    "expected": "3"
  },
  {
    "input": "numIslands([[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1],[0,0,0,0,1],[0,0,0,1,0]])",
    "expected": "4"
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
