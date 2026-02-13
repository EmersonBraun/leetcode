// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("reverse-integer", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Reverse a 32-bit signed integer
 * @param {number} num - Input integer
 * @return {number} - Reversed integer
 */
function reverse(num) {
  // Handle sign
  const isNegative = num < 0;
  let n = Math.abs(num);
  
  let reversed = 0;
  
  // Extract digits and build reversed number
  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  
  // Apply sign
  return isNegative ? -reversed : reversed;
}

// Test cases
console.log('Example 1:', reverse(550)); 
// 55

console.log('Example 2:', reverse(-37)); 
// -73

console.log('Example 3:', reverse(123)); 
// 321

console.log('Example 4:', reverse(120)); 
// 21

console.log('Test 5:', reverse(0)); 
// 0`;
    const testCases = [
  {
    "input": "reverse(550)",
    "expected": "55"
  },
  {
    "input": "reverse(-37)",
    "expected": "-73"
  },
  {
    "input": "reverse(123)",
    "expected": "321"
  },
  {
    "input": "reverse(120)",
    "expected": "21"
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
