// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("shortest-distance-to-character", () => {
  describe("JavaScript Solution - Two Pass", () => {
    const code = `/**
 * Find shortest distance from each character to target character
 * @param {string} s - Input string
 * @param {character} c - Target character
 * @return {number[]} - Array of shortest distances
 */
function shortestToChar(s, c) {
  const n = s.length;
  const result = new Array(n).fill(Infinity);
  
  // First pass: left to right
  // Find distance to nearest c on the left (or current position)
  let prev = -Infinity;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = Math.min(result[i], i - prev);
  }
  
  // Second pass: right to left
  // Find distance to nearest c on the right (or current position)
  prev = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = Math.min(result[i], prev - i);
  }
  
  return result;
}

// Test cases
console.log('Example 1:', shortestToChar("dailybyte", 'y')); 
// [4, 3, 2, 1, 0, 1, 0, 1, 2]

console.log('Example 2:', shortestToChar("loveleetcode", 'e')); 
// [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

console.log('Example 3:', shortestToChar("aaab", 'b')); 
// [3, 2, 1, 0]

console.log('Example 4:', shortestToChar("abaa", 'b')); 
// [1, 0, 1, 2]`;
    const testCases = [
  {
    "input": "JSON.stringify(shortestToChar(\"dailybyte\", \"y\"))",
    "expected": "[4,3,2,1,0,1,0,1,2]"
  },
  {
    "input": "JSON.stringify(shortestToChar(\"loveleetcode\", \"e\"))",
    "expected": "[3,2,1,0,1,0,0,1,2,2,1,0]"
  },
  {
    "input": "JSON.stringify(shortestToChar(\"aaab\", \"b\"))",
    "expected": "[3,2,1,0]"
  },
  {
    "input": "JSON.stringify(shortestToChar(\"abaa\", \"b\"))",
    "expected": "[1,0,1,2]"
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
