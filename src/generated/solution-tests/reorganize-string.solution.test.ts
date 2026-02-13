// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("reorganize-string", () => {
  describe("JavaScript Solution - Greedy with Heap", () => {
    const code = `/**
 * Reorganize string so no two adjacent characters are same
 * @param {string} s - Input string
 * @return {string} - Reorganized string or empty string if impossible
 */
function reorganizeString(s) {
  // Count frequency of each character
  const freq = new Map();
  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  
  // Check if it's possible
  const maxFreq = Math.max(...Array.from(freq.values()));
  const n = s.length;
  
  // If any character appears more than (n+1)/2 times, it's impossible
  if (maxFreq > Math.floor((n + 1) / 2)) {
    return '';
  }
  
  // Create array of [char, count] and sort by frequency (descending)
  const chars = Array.from(freq.entries())
    .map(([char, count]) => [char, count])
    .sort((a, b) => b[1] - a[1]);
  
  // Build result using greedy approach
  const result = new Array(n);
  let index = 0;
  
  // Place characters starting with most frequent
  for (const [char, count] of chars) {
    for (let i = 0; i < count; i++) {
      // Place at even indices first, then odd indices
      if (index >= n) {
        index = 1; // Switch to odd indices
      }
      result[index] = char;
      index += 2;
    }
  }
  
  return result.join('');
}

// Test cases
console.log('Example 1:', reorganizeString("abb")); 
// "bab"

console.log('Example 2:', reorganizeString("xxxy")); 
// ""

console.log('Example 3:', reorganizeString("aab")); 
// "aba"

console.log('Test 4:', reorganizeString("aaab")); 
// ""`;
    const testCases = [
  {
    "input": "reorganizeString(\"abb\")",
    "expected": "\"bab\""
  },
  {
    "input": "reorganizeString(\"xxxy\")",
    "expected": "\"\""
  },
  {
    "input": "reorganizeString(\"aab\")",
    "expected": "\"aba\""
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
