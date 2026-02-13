// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("word-pattern", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Check if string matches the encryption pattern
 * @param {string} s - String to check
 * @param {string} code - Pattern code
 * @return {boolean} - True if pattern matches
 */
function wordPattern(s, code) {
  // Split string into words
  const words = s.split(' ');
  
  // Check if number of words matches pattern length
  if (words.length !== code.length) {
    return false;
  }
  
  // Two maps for bijection: char -> word and word -> char
  const charToWord = new Map();
  const wordToChar = new Map();
  
  // Iterate through pattern and words simultaneously
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    const word = words[i];
    
    // Check if character is already mapped
    if (charToWord.has(char)) {
      // Character must map to the same word
      if (charToWord.get(char) !== word) {
        return false;
      }
    } else {
      // Check if word is already mapped to a different character
      if (wordToChar.has(word)) {
        // Word is already mapped to a different character
        return false;
      }
      // Create new mapping
      charToWord.set(char, word);
      wordToChar.set(word, char);
    }
  }
  
  return true;
}

// Test cases
console.log('Example 1:', wordPattern("the daily byte", "abc")); // true
console.log('Example 2:', wordPattern("the daily byte curriculum", "abcc")); // false
console.log('Example 3:', wordPattern("dog cat cat dog", "abba")); // true
console.log('Example 4:', wordPattern("dog cat cat fish", "abba")); // false
console.log('Test 5:', wordPattern("a b", "aa")); // false
console.log('Test 6:', wordPattern("a a", "ab")); // false`;
    const testCases = [
  {
    "input": "wordPattern(\"the daily byte\", \"abc\")",
    "expected": "true"
  },
  {
    "input": "wordPattern(\"the daily byte curriculum\", \"abcc\")",
    "expected": "false"
  },
  {
    "input": "wordPattern(\"dog cat cat dog\", \"abba\")",
    "expected": "true"
  },
  {
    "input": "wordPattern(\"dog cat cat fish\", \"abba\")",
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
