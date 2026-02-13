// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("transpose-matrix", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Transpose a matrix
 * @param {number[][]} matrix - 2D matrix to transpose
 * @return {number[][]} - Transposed matrix
 */
function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Create result matrix with swapped dimensions
  const result = Array(cols).fill().map(() => Array(rows).fill(0));
  
  // Copy elements: matrix[i][j] → result[j][i]
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  
  return result;
}

// Test cases
const matrix1 = [
  [1, 2],
  [3, 4]
];
console.log('Example 1:', transpose(matrix1));
// [[1, 3], [2, 4]]

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log('Example 2:', transpose(matrix2));
// [[1, 4], [2, 5], [3, 6]]

const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Example 3:', transpose(matrix3));
// [[1, 4, 7], [2, 5, 8], [3, 6, 9]]`;
    const testCases = [
  {
    "input": "JSON.stringify(transpose([[1,2],[3,4]]))",
    "expected": "[[1,3],[2,4]]"
  },
  {
    "input": "JSON.stringify(transpose([[1,2,3],[4,5,6]]))",
    "expected": "[[1,4],[2,5],[3,6]]"
  },
  {
    "input": "JSON.stringify(transpose([[1,2,3],[4,5,6],[7,8,9]]))",
    "expected": "[[1,4,7],[2,5,8],[3,6,9]]"
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
