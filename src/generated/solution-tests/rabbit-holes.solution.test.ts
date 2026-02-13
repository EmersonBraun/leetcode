// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("rabbit-holes", () => {
  describe("JavaScript Solution - Multi-source BFS", () => {
    const code = `/**
 * Update rabbit cells with distance to nearest rabbit hole
 * @param {number[][]} grid - 2D array (-1=obstacle, 0=hole, 1=rabbit)
 * @return {void} - Modifies grid in-place
 */
function updateRabbitDistances(grid) {
  if (!grid || grid.length === 0) return;
  
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  // Step 1: Find all rabbit holes (value 0) and add to queue
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        queue.push([i, j, 0]); // [row, col, distance]
      }
    }
  }
  
  // Step 2: Multi-source BFS from all rabbit holes
  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();
    
    // Explore 4 directions
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      
      // Check bounds and if cell is a rabbit (value 1)
      if (
        newRow >= 0 && newRow < rows &&
        newCol >= 0 && newCol < cols &&
        grid[newRow][newCol] === 1
      ) {
        // Update rabbit cell with distance + 1
        grid[newRow][newCol] = distance + 1;
        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }
}

// Test cases
const grid1 = [
  [-1, 0, 1],
  [1, 1, -1],
  [1, 1, 0]
];
updateRabbitDistances(grid1);
console.log('Example 1:', grid1);
// [[-1, 0, 1], [2, 1, -1], [2, 1, 0]]

const grid2 = [
  [1, 1, 1],
  [1, -1, -1],
  [1, 1, 0]
];
updateRabbitDistances(grid2);
console.log('Example 2:', grid2);
// [[4, 5, 6], [3, -1, -1], [2, 1, 0]]`;
    const testCases = [
  {
    "input": "(grid => { updateRabbitDistances(grid); return JSON.stringify(grid); })([[-1,0,1],[1,1,-1],[1,1,0]])",
    "expected": "[[-1,0,1],[2,2,-1],[2,2,0]]"
  },
  {
    "input": "(grid => { updateRabbitDistances(grid); return JSON.stringify(grid); })([[1,1,1],[1,-1,-1],[1,1,0]])",
    "expected": "[[4,5,6],[3,-1,-1],[2,3,0]]"
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
