// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("frog-jump", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Check if frog can cross river
 * @param {number[]} stones - Array of stone positions (sorted)
 * @return {boolean} - Whether frog can reach last stone
 */
function canCross(stones) {
  const n = stones.length;
  
  // Create a map: stone position -> set of jump sizes that can reach it
  const dp = new Map();
  
  // Initialize: stone 0 can be reached with jump size 0 (starting position)
  dp.set(stones[0], new Set([0]));
  
  // Create a set for fast stone position lookup
  const stoneSet = new Set(stones);
  
  // Process each stone
  for (let i = 0; i < n; i++) {
    const currentPos = stones[i];
    const jumpSizes = dp.get(currentPos);
    
    if (!jumpSizes) continue; // Cannot reach this stone
    
    // For each jump size that can reach current stone
    for (const jumpSize of jumpSizes) {
      // Next jump can be jumpSize-1, jumpSize, or jumpSize+1
      for (const nextJump of [jumpSize - 1, jumpSize, jumpSize + 1]) {
        if (nextJump <= 0) continue; // Must jump forward
        
        const nextPos = currentPos + nextJump;
        
        // Check if next position is a stone
        if (stoneSet.has(nextPos)) {
          // Add this jump size to the set of jump sizes for next stone
          if (!dp.has(nextPos)) {
            dp.set(nextPos, new Set());
          }
          dp.get(nextPos).add(nextJump);
        }
      }
    }
  }
  
  // Check if last stone can be reached
  const lastStone = stones[n - 1];
  return dp.has(lastStone) && dp.get(lastStone).size > 0;
}

// Test cases
console.log('Example 1:', canCross([0, 1, 10])); 
// false

console.log('Example 2:', canCross([0, 1, 2, 4])); 
// true

console.log('Example 3:', canCross([0, 1, 3, 5, 6, 8, 12, 17])); 
// false`;
    const testCases = [
  {
    "input": "canCross([0, 1, 10])",
    "expected": "false"
  },
  {
    "input": "canCross([0, 1, 2, 4])",
    "expected": "true"
  },
  {
    "input": "canCross([0, 1, 3, 5, 6, 8, 12, 17])",
    "expected": "true"
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
