// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("hamming-distance", () => {
  describe("JavaScript Solution - XOR and Count", () => {
    const code = `/**
 * Calculate Hamming distance between two integers
 * @param {number} x - First integer
 * @param {number} y - Second integer
 * @return {number} - Hamming distance
 */
function hammingDistance(x, y) {
  // XOR gives 1 where bits differ, 0 where they're the same
  let xor = x ^ y;
  
  // Count the number of set bits (1s) in xor
  let count = 0;
  while (xor > 0) {
    count += xor & 1; // Check if last bit is 1
    xor = xor >> 1;   // Shift right to check next bit
  }
  
  return count;
}

// Test cases
console.log('Example 1:', hammingDistance(2, 4)); 
// 2

console.log('Example 2:', hammingDistance(1, 4)); 
// 2

console.log('Example 3:', hammingDistance(3, 1)); 
// 1

console.log('Test 4:', hammingDistance(0, 0)); 
// 0`;
    const testCases = [
  {
    "input": "hammingDistance(2, 4)",
    "expected": "2"
  },
  {
    "input": "hammingDistance(1, 4)",
    "expected": "2"
  },
  {
    "input": "hammingDistance(3, 1)",
    "expected": "1"
  },
  {
    "input": "hammingDistance(0, 0)",
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
