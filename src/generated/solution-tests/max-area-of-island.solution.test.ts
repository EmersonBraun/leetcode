// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("max-area-of-island", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Find the size of the largest island
 * @param {number[][]} grid - 2D array where 1 = land, 0 = water
 * @return {number} - Size of the largest island
 */
function maxAreaOfIsland(grid) {
  if (!grid || grid.length === 0) return 0;
  
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;
  
  /**
   * DFS to explore an island and count its size
   * @param {number} row - Current row
   * @param {number} col - Current column
   * @return {number} - Size of the island
   */
  function dfs(row, col) {
    // Base cases: out of bounds or water or already visited
    if (
      row < 0 || row >= rows ||
      col < 0 || col >= cols ||
      grid[row][col] === 0
    ) {
      return 0;
    }
    
    // Mark current cell as visited (set to 0)
    grid[row][col] = 0;
    
    // Count current cell and explore neighbors
    let area = 1;
    area += dfs(row - 1, col); // up
    area += dfs(row + 1, col); // down
    area += dfs(row, col - 1); // left
    area += dfs(row, col + 1); // right
    
    return area;
  }
  
  // Iterate through all cells
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        // Found a new island, explore it
        const area = dfs(i, j);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  
  return maxArea;
}

// Test cases
const grid1 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
console.log('Example 1:', maxAreaOfIsland(grid1)); // 4

const grid2 = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 1, 0, 0, 1],
];
console.log('Example 2:', maxAreaOfIsland(grid2)); // 4

const grid3 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
console.log('Example 3:', maxAreaOfIsland(grid3)); // 9

const grid4 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
console.log('Example 4:', maxAreaOfIsland(grid4)); // 0`;
    const testCases = [
  {
    "input": "maxAreaOfIsland([[1,1,0],[1,1,0],[0,0,1]])",
    "expected": "4"
  },
  {
    "input": "maxAreaOfIsland([[1,1,1],[1,1,1],[1,1,1]])",
    "expected": "9"
  },
  {
    "input": "maxAreaOfIsland([[0,0,0],[0,0,0],[0,0,0]])",
    "expected": "0"
  },
  {
    "input": "maxAreaOfIsland([[0,0,1,0,0],[0,0,0,1,1],[0,1,1,0,0],[0,1,0,0,1],[0,1,0,0,1]])",
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
