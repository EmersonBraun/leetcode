// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("word-search", () => {
  describe("JavaScript Solution - DFS with Backtracking", () => {
    const code = `/**
 * Check if word can be formed in board
 * @param {character[][]} board - 2D board
 * @param {string} word - Word to search
 * @return {boolean} - Whether word can be formed
 */
function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  
  // Directions: up, down, left, right
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  /**
   * DFS function to search for word
   * @param {number} row - Current row
   * @param {number} col - Current column
   * @param {number} index - Current character index in word
   * @return {boolean} - Whether word can be formed from this position
   */
  function dfs(row, col, index) {
    // Base case: found the entire word
    if (index === word.length) {
      return true;
    }
    
    // Check bounds and if current cell matches current character
    if (row < 0 || row >= rows || col < 0 || col >= cols || 
        board[row][col] !== word[index]) {
      return false;
    }
    
    // Mark cell as visited (temporarily change to special character)
    const temp = board[row][col];
    board[row][col] = '#';
    
    // Explore all four directions
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (dfs(newRow, newCol, index + 1)) {
        return true; // Found word, return immediately
      }
    }
    
    // Backtrack: restore cell value
    board[row][col] = temp;
    return false;
  }
  
  // Try starting from each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
  }
  
  return false;
}

// Test cases
const board = [
  ['C','A','T','F'],
  ['B','G','E','S'],
  ['I','T','A','E']
];

console.log('Example 1:', exist(board, "CAT")); 
// true

console.log('Example 2:', exist([...board.map(r => [...r])], "TEA")); 
// true

console.log('Example 3:', exist([...board.map(r => [...r])], "SEAT")); 
// true

console.log('Example 4:', exist([...board.map(r => [...r])], "BAT")); 
// false`;
    const testCases = [
  {
    "input": "exist([[\"C\",\"A\",\"T\",\"F\"],[\"B\",\"G\",\"E\",\"S\"],[\"I\",\"T\",\"A\",\"E\"]], \"CAT\")",
    "expected": "true"
  },
  {
    "input": "exist([[\"C\",\"A\",\"T\",\"F\"],[\"B\",\"G\",\"E\",\"S\"],[\"I\",\"T\",\"A\",\"E\"]], \"BAT\")",
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
