// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("maximum-length-concatenated-string", () => {
  describe("JavaScript Solution - Backtracking with Bit Manipulation", () => {
    const code = `/**
 * Find maximum length of concatenated string with unique characters
 * @param {string[]} words - Array of words
 * @return {number} - Maximum length of valid concatenation
 */
function maxLength(words) {
  // Preprocess: convert words to bitmasks and filter invalid words
  const validWords = [];
  const masks = [];
  
  for (const word of words) {
    let mask = 0;
    let hasDuplicate = false;
    
    // Check for duplicates and build bitmask
    for (const char of word) {
      const bit = 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
      
      // If this character is already set, we have a duplicate
      if (mask & bit) {
        hasDuplicate = true;
        break;
      }
      
      mask |= bit;
    }
    
    // Only keep words without duplicate characters
    if (!hasDuplicate) {
      validWords.push(word);
      masks.push(mask);
    }
  }
  
  let maxLen = 0;
  
  /**
   * Backtracking function
   * @param {number} index - Current word index
   * @param {number} currentMask - Current character mask
   * @param {number} currentLength - Current concatenation length
   */
  function backtrack(index, currentMask, currentLength) {
    // Update maximum
    maxLen = Math.max(maxLen, currentLength);
    
    // Try adding each remaining word
    for (let i = index; i < validWords.length; i++) {
      // Check if this word's characters conflict with current mask
      if ((currentMask & masks[i]) === 0) {
        // No conflict, add this word
        backtrack(i + 1, currentMask | masks[i], currentLength + validWords[i].length);
      }
    }
  }
  
  backtrack(0, 0, 0);
  return maxLen;
}

// Test cases
console.log('Example 1:', maxLength(["the","dog","ran"])); // 9
console.log('Example 2:', maxLength(["the","eagle","flew"])); // 4
console.log('Example 3:', maxLength(["cha","r","act","ers"])); // 6
console.log('Test 4:', maxLength(["abcdefghijklmnopqrstuvwxyz"])); // 26
console.log('Test 5:', maxLength(["un","iq","ue"])); // 4`;
    const testCases = [
  {
    "input": "maxLength([\"the\",\"dog\",\"ran\"])",
    "expected": "9"
  },
  {
    "input": "maxLength([\"the\",\"eagle\",\"flew\"])",
    "expected": "4"
  },
  {
    "input": "maxLength([\"cha\",\"r\",\"act\",\"ers\"])",
    "expected": "6"
  },
  {
    "input": "maxLength([\"un\",\"iq\",\"ue\"])",
    "expected": "4"
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
