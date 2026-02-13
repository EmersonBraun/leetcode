// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("rotting-oranges", () => {
  describe("JavaScript Solution - BFS", () => {
    const code = `/**
 * Find minutes until all people are sick
 * @param {number[][]} grid - 2D array (0=empty, 1=healthy, 2=sick)
 * @return {number} - Minutes until all sick, or -1 if impossible
 */
function orangesRotting(grid) {
  if (!grid || grid.length === 0) return 0;
  
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let healthyCount = 0;
  
  // Step 1: Find all sick people and count healthy people
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]); // [row, col, minute]
      } else if (grid[i][j] === 1) {
        healthyCount++;
      }
    }
  }
  
  // If no healthy people, return 0
  if (healthyCount === 0) return 0;
  
  // Step 2: BFS to spread infection
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // up, down, left, right
  let minutes = 0;
  
  while (queue.length > 0) {
    const [row, col, time] = queue.shift();
    minutes = time;
    
    // Check all 4 directions
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      
      // Check bounds and if cell is healthy
      if (
        newRow >= 0 && newRow < rows &&
        newCol >= 0 && newCol < cols &&
        grid[newRow][newCol] === 1
      ) {
        // Make this person sick
        grid[newRow][newCol] = 2;
        healthyCount--;
        queue.push([newRow, newCol, time + 1]);
      }
    }
  }
  
  // If healthy people remain, return -1
  return healthyCount === 0 ? minutes : -1;
}

// Test cases
const grid1 = [
  [1,1,1],
  [1,1,0],
  [0,1,2]
];
console.log('Example 1:', orangesRotting(grid1)); // 4

const grid2 = [
  [1,1,1],
  [0,0,0],
  [2,0,1]
];
console.log('Example 2:', orangesRotting(grid2)); // -1

const grid3 = [
  [2,1,1],
  [1,1,0],
  [0,1,1]
];
console.log('Example 3:', orangesRotting(grid3)); // 4

const grid4 = [
  [2,2],
  [1,1],
  [0,0],
  [2,0]
];
console.log('Test 4:', orangesRotting(grid4)); // 2`;
    const testCases = [
  {
    "input": "orangesRotting([[1,1,1],[1,1,0],[0,1,2]])",
    "expected": "4"
  },
  {
    "input": "orangesRotting([[1,1,1],[0,0,0],[2,0,1]])",
    "expected": "-1"
  },
  {
    "input": "orangesRotting([[2,1,1],[1,1,0],[0,1,1]])",
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
