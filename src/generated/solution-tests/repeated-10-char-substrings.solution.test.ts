// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("repeated-10-char-substrings", () => {
  describe("JavaScript Solution - Sliding Window", () => {
    const code = `/**
 * Find all repeated 10-character substrings
 * @param {string} s - Input string
 * @return {string[]} - Array of repeated 10-character substrings
 */
function findRepeatedDnaSequences(s) {
  if (s.length < 10) {
    return [];
  }
  
  const substringCount = new Map();
  
  // Extract all 10-character substrings using sliding window
  for (let i = 0; i <= s.length - 10; i++) {
    const substring = s.substring(i, i + 10);
    substringCount.set(substring, (substringCount.get(substring) || 0) + 1);
  }
  
  // Find all substrings that appear more than once
  const result = [];
  for (const [substring, count] of substringCount.entries()) {
    if (count > 1) {
      result.push(substring);
    }
  }
  
  return result;
}

// Test cases
console.log('Example 1:', findRepeatedDnaSequences("BBBBBBBBBBB")); 
// ["BBBBBBBBBB"]

console.log('Example 2:', findRepeatedDnaSequences("ABABABABABABBBBBBBBBBB")); 
// ["ABABABABAB","BBBBBBBBBB"]

console.log('Example 3:', findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCAAAAAGGGTTT")); 
// ["AAAAACCCCC","CCCCCAAAAA"]

console.log('Test 4:', findRepeatedDnaSequences("AAAAAAAAAAA")); 
// ["AAAAAAAAAA"]

console.log('Test 5:', findRepeatedDnaSequences("ABCDEFGHIJ")); 
// [] (no repeats)`;
    const testCases = [
  {
    "input": "JSON.stringify(findRepeatedDnaSequences(\"BBBBBBBBBBB\"))",
    "expected": "[\"BBBBBBBBBB\"]"
  },
  {
    "input": "JSON.stringify(findRepeatedDnaSequences(\"ABABABABABABBBBBBBBBBB\").sort())",
    "expected": "[\"ABABABABAB\",\"BBBBBBBBBB\"]"
  },
  {
    "input": "JSON.stringify(findRepeatedDnaSequences(\"AAAAACCCCCAAAAACCCCCAAAAAGGGTTT\").sort())",
    "expected": "[\"AAAAACCCCC\",\"AAAACCCCCA\",\"AAACCCCCAA\",\"AACCCCCAAA\",\"ACCCCCAAAA\",\"CCCCCAAAAA\"]"
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
