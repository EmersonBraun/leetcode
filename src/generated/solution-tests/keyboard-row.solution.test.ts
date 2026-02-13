// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("keyboard-row", () => {
  describe("JavaScript Solution - Hash Map", () => {
    const code = `/**
 * Find words that can be typed using only one keyboard row
 * @param {string[]} words - List of words
 * @return {string[]} - Words that use only one row
 */
function findWords(words) {
  // Define keyboard rows
  const topRow = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']);
  const middleRow = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']);
  const bottomRow = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm']);
  
  const result = [];
  
  for (const word of words) {
    if (canTypeInOneRow(word, topRow, middleRow, bottomRow)) {
      result.push(word);
    }
  }
  
  return result;
}

/**
 * Check if word can be typed using only one row
 * @param {string} word - Word to check
 * @param {Set} topRow - Top row characters
 * @param {Set} middleRow - Middle row characters
 * @param {Set} bottomRow - Bottom row characters
 * @return {boolean} - True if word uses only one row
 */
function canTypeInOneRow(word, topRow, middleRow, bottomRow) {
  if (word.length === 0) return true;
  
  // Determine which row the first character belongs to
  const firstChar = word[0].toLowerCase();
  let targetRow;
  
  if (topRow.has(firstChar)) {
    targetRow = topRow;
  } else if (middleRow.has(firstChar)) {
    targetRow = middleRow;
  } else {
    targetRow = bottomRow;
  }
  
  // Check if all characters belong to the same row
  for (let i = 1; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (!targetRow.has(char)) {
      return false;
    }
  }
  
  return true;
}

// Test cases
console.log('Example 1:', findWords(["two", "dad", "cat"])); 
// ["two", "dad"]

console.log('Example 2:', findWords(["ufo", "xzy", "byte"])); 
// []

console.log('Example 3:', findWords(["qwerty", "asdf", "zxcv"])); 
// ["qwerty", "asdf", "zxcv"]`;
    const testCases = [
  {
    "input": "JSON.stringify(findWords([\"two\", \"dad\", \"cat\"]))",
    "expected": "[\"two\",\"dad\"]"
  },
  {
    "input": "JSON.stringify(findWords([\"ufo\", \"xzy\", \"byte\"]))",
    "expected": "[]"
  },
  {
    "input": "JSON.stringify(findWords([\"qwerty\", \"asdf\", \"zxcv\"]))",
    "expected": "[\"qwerty\",\"asdf\",\"zxcv\"]"
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
