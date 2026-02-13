// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("maximum-points-from-coins", () => {
  describe("JavaScript Solution - Greedy", () => {
    const code = `/**
 * Find maximum points we can obtain
 * @param {number[]} coins - Array of coin values
 * @param {number} E - Initial energy
 * @return {number} - Maximum number of points
 */
function maxPoints(coins, E) {
  // Sort coins in ascending order (use smaller coins first)
  const sorted = [...coins].sort((a, b) => a - b);
  
  let energy = E;
  let points = 0;
  
  for (const coin of sorted) {
    // If we have enough energy, exchange for a point
    if (energy >= coin) {
      energy -= coin;
      points++;
    } 
    // If we don't have enough energy but have points, give away a point to gain energy
    else if (points > 0) {
      // Give away a point to gain coin energy
      energy += coin;
      points--;
      // Then exchange for a point (if we now have enough energy)
      if (energy >= coin) {
        energy -= coin;
        points++;
      }
    }
    // Otherwise, skip this coin
  }
  
  return points;
}

// Test cases
console.log('Example 1:', maxPoints([100, 150, 200], 150)); 
// 1

console.log('Example 2:', maxPoints([100, 200, 300, 400], 200)); 
// Need to verify

console.log('Example 3:', maxPoints([300], 200)); 
// 0`;
    const testCases = [
  {
    "input": "maxPoints([100, 150, 200], 150)",
    "expected": "1"
  },
  {
    "input": "maxPoints([300], 200)",
    "expected": "0"
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
