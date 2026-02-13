// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("rotate-image", () => {
  describe("JavaScript Solution - Transpose + Reverse", () => {
    const code = `/**
 * Rotate matrix 90 degrees clockwise (in-place)
 * @param {number[][]} matrix - 2D matrix to rotate
 * @return {void} - Modifies matrix in-place
 */
function rotate(matrix) {
  const n = matrix.length;
  
  // Step 1: Transpose the matrix (swap rows and columns)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // Swap matrix[i][j] with matrix[j][i]
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

// Helper function to print matrix
function printMatrix(matrix) {
  console.log('[');
  for (const row of matrix) {
    console.log('  [' + row.join(', ') + ']');
  }
  console.log(']');
}

// Test cases
const image1 = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18]
];
rotate(image1);
console.log('Example 1:');
printMatrix(image1);
// [[16, 13, 10], [17, 14, 11], [18, 15, 12]]

const image2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
rotate(image2);
console.log('Example 2:');
printMatrix(image2);
// [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]

const image3 = [
  [1, 2],
  [3, 4]
];
rotate(image3);
console.log('Example 3:');
printMatrix(image3);
// [[3, 1], [4, 2]]`;
    const testCases = [
  {
    "input": "(() => { const m = [[10,11,12],[13,14,15],[16,17,18]]; rotate(m); return JSON.stringify(m); })()",
    "expected": "[[16,13,10],[17,14,11],[18,15,12]]"
  },
  {
    "input": "(() => { const m = [[1,2],[3,4]]; rotate(m); return JSON.stringify(m); })()",
    "expected": "[[3,1],[4,2]]"
  },
  {
    "input": "(() => { const m = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; rotate(m); return JSON.stringify(m); })()",
    "expected": "[[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]"
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
