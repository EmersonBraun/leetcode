// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("bricks-in-wheelbarrow", () => {
  describe("JavaScript Solution - Greedy", () => {
    const code = `/**
 * Find maximum number of bricks that fit in wheelbarrow
 * @param {number[]} bricks - Array of brick weights
 * @return {number} - Maximum number of bricks
 */
function maxBricks(bricks) {
  const capacity = 5000; // Up to (not including) 5000 pounds
  
  // Sort bricks by weight (lightest first)
  const sorted = [...bricks].sort((a, b) => a - b);
  
  let totalWeight = 0;
  let count = 0;
  
  // Take lightest bricks first
  for (const weight of sorted) {
    if (totalWeight + weight < capacity) {
      totalWeight += weight;
      count++;
    } else {
      break; // Can't fit any more
    }
  }
  
  return count;
}

// Test cases
console.log('Example 1:', maxBricks([1000, 1000, 1000, 2000])); 
// 3

console.log('Example 2:', maxBricks([1000, 200, 150, 200])); 
// 4

console.log('Example 3:', maxBricks([2000, 2000, 2000])); 
// 2`;
    const testCases = [
  {
    "input": "maxBricks([1000, 1000, 1000, 2000])",
    "expected": "3"
  },
  {
    "input": "maxBricks([1000, 200, 150, 200])",
    "expected": "4"
  },
  {
    "input": "maxBricks([2000, 2000, 2000])",
    "expected": "2"
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
