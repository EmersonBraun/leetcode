// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("binary-number-with-alternating-bits", () => {
  describe("JavaScript Solution - Bit Manipulation", () => {
    const code = `/**
 * Check if number has alternating bits
 * @param {number} N - Positive integer
 * @return {boolean} - True if bits alternate
 */
function hasAlternatingBits(N) {
  let prevBit = N & 1; // Get last bit
  N = N >> 1; // Shift right to remove last bit
  
  while (N > 0) {
    const currentBit = N & 1; // Get current last bit
    
    // If current bit equals previous bit, not alternating
    if (currentBit === prevBit) {
      return false;
    }
    
    prevBit = currentBit;
    N = N >> 1; // Shift right to get next bit
  }
  
  return true;
}

// Test cases
console.log('Example 1:', hasAlternatingBits(5)); 
// true (101)

console.log('Example 2:', hasAlternatingBits(8)); 
// false (1000)

console.log('Example 3:', hasAlternatingBits(7)); 
// false (111)

console.log('Example 4:', hasAlternatingBits(10)); 
// true (1010)

console.log('Test 5:', hasAlternatingBits(1)); 
// true (1)`;
    const testCases = [
  {
    "input": "hasAlternatingBits(5)",
    "expected": "true"
  },
  {
    "input": "hasAlternatingBits(8)",
    "expected": "false"
  },
  {
    "input": "hasAlternatingBits(10)",
    "expected": "true"
  },
  {
    "input": "hasAlternatingBits(7)",
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
