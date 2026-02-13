// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("path-with-maximum-gold", () => {
  describe("JavaScript Solution - DFS with Backtracking", () => {
    const code = `/**
 * Find maximum gold that can be collected
 * @param {number[][]} goldMine - 2D matrix representing gold mine
 * @return {number} - Maximum amount of gold
 */
function getMaximumGold(goldMine) {
  const rows = goldMine.length;
  const cols = goldMine[0].length;
  let maxGold = 0;
  
  // Directions: up, down, left, right
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  /**
   * DFS function to explore paths from a cell
   * @param {number} row - Current row
   * @param {number} col - Current column
   * @param {number} currentGold - Gold collected so far
   */
  function dfs(row, col, currentGold) {
    // Check bounds and if cell has gold
    if (row < 0 || row >= rows || col < 0 || col >= cols || goldMine[row][col] === 0) {
      return;
    }
    
    // Collect gold from current cell
    const gold = goldMine[row][col];
    currentGold += gold;
    maxGold = Math.max(maxGold, currentGold);
    
    // Mark cell as visited (set to 0 temporarily)
    goldMine[row][col] = 0;
    
    // Explore all four directions
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      dfs(newRow, newCol, currentGold);
    }
    
    // Backtrack: restore cell value
    goldMine[row][col] = gold;
  }
  
  // Try starting from each cell that has gold
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (goldMine[i][j] > 0) {
        dfs(i, j, 0);
      }
    }
  }
  
  return maxGold;
}

// Test cases
console.log('Example 1:', getMaximumGold([
    [0, 2, 0],
    [8, 6, 3],
    [0, 9, 0]
])); 
// 23

console.log('Example 2:', getMaximumGold([
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20]
])); 
// 28`;
    const testCases = [
  {
    "input": "getMaximumGold([[0,2,0],[8,6,3],[0,9,0]])",
    "expected": "23"
  },
  {
    "input": "getMaximumGold([[0,6,0],[5,8,7],[0,9,0]])",
    "expected": "24"
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
