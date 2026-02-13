// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("spiral-matrix", () => {
  describe("JavaScript Solution - Boundary Tracking", () => {
    const code = `/**
 * Traverse matrix in spiral order
 * @param {number[][]} matrix - 2D matrix
 * @return {number[]} - Elements in spiral order
 */
function spiralOrder(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  
  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // Traverse right along top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++; // Move top boundary down
    
    // Traverse down along right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--; // Move right boundary left
    
    // Traverse left along bottom row (if still valid)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--; // Move bottom boundary up
    }
    
    // Traverse up along left column (if still valid)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++; // Move left boundary right
    }
  }
  
  return result;
}

// Test cases
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Example 1:', spiralOrder(matrix1)); 
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
console.log('Example 2:', spiralOrder(matrix2)); 
// [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

const matrix3 = [
  [1, 2],
  [3, 4]
];
console.log('Example 3:', spiralOrder(matrix3)); 
// [1, 2, 4, 3]

const matrix4 = [[1]];
console.log('Example 4:', spiralOrder(matrix4)); 
// [1]`;
    const testCases = [
  {
    "input": "JSON.stringify(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))",
    "expected": "[1,2,3,6,9,8,7,4,5]"
  },
  {
    "input": "JSON.stringify(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))",
    "expected": "[1,2,3,4,8,12,11,10,9,5,6,7]"
  },
  {
    "input": "JSON.stringify(spiralOrder([[1,2],[3,4]]))",
    "expected": "[1,2,4,3]"
  },
  {
    "input": "JSON.stringify(spiralOrder([[1]]))",
    "expected": "[1]"
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
