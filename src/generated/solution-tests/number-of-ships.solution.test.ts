// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("number-of-ships", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Check if harbor is safe to sail
 * @param {string[][]} harbor - 2D array (O = water, S = ship)
 * @param {number} limit - Maximum number of ships allowed
 * @return {boolean} - True if safe to sail (current ships + 1 < limit)
 */
function isSafeToSail(harbor, limit) {
  if (!harbor || harbor.length === 0) {
    return 1 < limit; // No ships, adding yours makes 1
  }
  
  const rows = harbor.length;
  const cols = harbor[0].length;
  const visited = Array(rows).fill().map(() => Array(cols).fill(false));
  let shipCount = 0;
  
  /**
   * DFS to mark all cells of a ship as visited
   * @param {number} row - Current row
   * @param {number} col - Current column
   */
  function dfs(row, col) {
    if (
      row < 0 || row >= rows ||
      col < 0 || col >= cols ||
      visited[row][col] ||
      harbor[row][col] === 'O'
    ) {
      return;
    }
    
    visited[row][col] = true;
    
    // Explore horizontally and vertically (not diagonally)
    dfs(row - 1, col); // up
    dfs(row + 1, col); // down
    dfs(row, col - 1); // left
    dfs(row, col + 1); // right
  }
  
  // Count ships
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (harbor[i][j] === 'S' && !visited[i][j]) {
        // Found a new ship
        shipCount++;
        dfs(i, j); // Mark all cells of this ship as visited
      }
    }
  }
  
  // Check if safe: current ships + your ship (1) < limit
  return (shipCount + 1) < limit;
}

// Test cases
const harbor1 = [
  ['O', 'O', 'S'],
  ['S', 'O', 'O'],
  ['O', 'O', 'S']
];
console.log('Example 1:', isSafeToSail(harbor1, 5)); // true

const harbor2 = [
  ['O', 'O', 'O'],
  ['S', 'O', 'S'],
  ['O', 'O', 'S']
];
console.log('Example 2:', isSafeToSail(harbor2, 3)); // false

const harbor3 = [
  ['S', 'S', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'S']
];
console.log('Example 3:', isSafeToSail(harbor3, 2)); // false`;
    const testCases = [
  {
    "input": "isSafeToSail([[\"O\",\"O\",\"S\"],[\"S\",\"O\",\"O\"],[\"O\",\"O\",\"S\"]], 5)",
    "expected": "true"
  },
  {
    "input": "isSafeToSail([[\"O\",\"O\",\"O\"],[\"S\",\"O\",\"S\"],[\"O\",\"O\",\"S\"]], 3)",
    "expected": "false"
  },
  {
    "input": "isSafeToSail([[\"S\",\"S\",\"O\"],[\"O\",\"O\",\"O\"],[\"O\",\"O\",\"S\"]], 2)",
    "expected": "false"
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
