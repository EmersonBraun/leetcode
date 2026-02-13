// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("largest-pond-size", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Find largest pond size
 * @param {number[][]} land - 2D matrix (1 = land, 0 = water)
 * @return {number} - Size of largest pond
 */
function largestPondSize(land) {
  if (!land || land.length === 0) return 0;
  
  const rows = land.length;
  const cols = land[0].length;
  const visited = Array(rows).fill().map(() => Array(cols).fill(false));
  let maxSize = 0;
  
  /**
   * DFS to count pond size
   * @param {number} row - Current row
   * @param {number} col - Current column
   * @return {number} - Size of current pond
   */
  function dfs(row, col) {
    if (
      row < 0 || row >= rows ||
      col < 0 || col >= cols ||
      visited[row][col] ||
      land[row][col] === 1  // Land, not water
    ) {
      return 0;
    }
    
    visited[row][col] = true;
    let size = 1; // Current cell contributes 1
    
    // Explore 4 directions (horizontally and vertically)
    size += dfs(row - 1, col); // up
    size += dfs(row + 1, col); // down
    size += dfs(row, col - 1); // left
    size += dfs(row, col + 1); // right
    
    return size;
  }
  
  // Traverse all cells
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (land[i][j] === 0 && !visited[i][j]) {
        // Found a new pond, explore it
        const pondSize = dfs(i, j);
        maxSize = Math.max(maxSize, pondSize);
      }
    }
  }
  
  return maxSize;
}

// Test cases
const land1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
console.log('Example 1:', largestPondSize(land1)); // 1

const land2 = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1]
];
console.log('Example 2:', largestPondSize(land2)); // 5

const land3 = [
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 0]
];
console.log('Example 3:', largestPondSize(land3)); // 4`;
    const testCases = [
  {
    "input": "largestPondSize([[1,1,1],[1,0,1],[1,1,1]])",
    "expected": "1"
  },
  {
    "input": "largestPondSize([[1,0,1],[0,0,0],[1,0,1]])",
    "expected": "5"
  },
  {
    "input": "largestPondSize([[0,0,1,0],[0,1,0,1],[1,0,0,0]])",
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
