// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("string-compression", () => {
  describe("JavaScript Solution - Two Pointers", () => {
    const code = `/**
 * Compress character array in place
 * @param {character[]} chars - Character array (modified in-place)
 * @return {number} - New length of compressed array
 */
function compress(chars) {
  if (chars.length <= 1) return chars.length;
  
  let writeIndex = 0; // Position to write compressed result
  let readIndex = 0;  // Position to read from original array
  
  while (readIndex < chars.length) {
    const currentChar = chars[readIndex];
    let count = 0;
    
    // Count consecutive same characters
    while (readIndex < chars.length && chars[readIndex] === currentChar) {
      count++;
      readIndex++;
    }
    
    // Write the character
    chars[writeIndex++] = currentChar;
    
    // Write the count if count > 1
    if (count > 1) {
      const countStr = count.toString();
      for (let i = 0; i < countStr.length; i++) {
        chars[writeIndex++] = countStr[i];
      }
    }
  }
  
  return writeIndex;
}

// Test cases
let chars1 = ['a', 'a', 'a', 'a', 'a', 'a'];
console.log('Example 1:', compress(chars1), chars1.slice(0, compress(chars1))); 
// 2, ['a', '6']

let chars2 = ['a', 'a', 'b', 'b', 'c', 'c'];
console.log('Example 2:', compress(chars2), chars2.slice(0, compress(chars2))); 
// 6, ['a', '2', 'b', '2', 'c', '2']

let chars3 = ['a', 'b', 'c'];
console.log('Example 3:', compress(chars3), chars3.slice(0, compress(chars3))); 
// 3, ['a', 'b', 'c'] (not compressed)`;
    const testCases = [
  {
    "input": "(chars => { const len = compress(chars); return len + \":\" + chars.slice(0, len).join(\"\"); })([\"a\",\"a\",\"a\",\"a\",\"a\",\"a\"])",
    "expected": "2:a6"
  },
  {
    "input": "(chars => { const len = compress(chars); return len + \":\" + chars.slice(0, len).join(\"\"); })([\"a\",\"a\",\"b\",\"b\",\"c\",\"c\"])",
    "expected": "6:a2b2c2"
  },
  {
    "input": "(chars => { const len = compress(chars); return len + \":\" + chars.slice(0, len).join(\"\"); })([\"a\",\"b\",\"c\"])",
    "expected": "3:abc"
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
