// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("k-closest-points-to-origin", () => {
  describe("JavaScript Solution - Sorting", () => {
    const code = `/**
 * Find k closest points to origin
 * @param {number[][]} points - Array of [x, y] coordinates
 * @param {number} k - Number of closest points to return
 * @return {number[][]} - K closest points
 */
function kClosest(points, k) {
  // Calculate distance squared for each point (avoid sqrt for efficiency)
  // Distance² = x² + y²
  const pointsWithDistance = points.map((point, index) => ({
    point,
    distanceSquared: point[0] * point[0] + point[1] * point[1],
    index
  }));
  
  // Sort by distance squared
  pointsWithDistance.sort((a, b) => a.distanceSquared - b.distanceSquared);
  
  // Return first k points
  return pointsWithDistance.slice(0, k).map(item => item.point);
}

// Test cases
console.log('Example 1:', kClosest([[1,1],[-2,-2]], 1)); 
// [[1,1]]

console.log('Example 2:', kClosest([[3,3],[5,-1],[-2,4]], 2)); 
// [[3,3],[-2,4]]

console.log('Example 3:', kClosest([[1,3],[-2,2]], 1)); 
// [[-2,2]]

console.log('Test 4:', kClosest([[1,3],[-2,2],[2,-2]], 2)); 
// [[-2,2],[1,3]]`;
    const testCases = [
  {
    "input": "JSON.stringify(kClosest([[1,1],[-2,-2]], 1))",
    "expected": "[[1,1]]"
  },
  {
    "input": "JSON.stringify(kClosest([[3,3],[5,-1],[-2,4]], 2))",
    "expected": "[[3,3],[-2,4]]"
  },
  {
    "input": "JSON.stringify(kClosest([[1,3],[-2,2]], 1))",
    "expected": "[[-2,2]]"
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
