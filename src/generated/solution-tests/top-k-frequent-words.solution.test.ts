// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("top-k-frequent-words", () => {
  describe("JavaScript Solution - Hash Map + Sort", () => {
    const code = `/**
 * Find top k frequent words
 * @param {string[]} words - Array of words
 * @param {number} k - Number of top words to return
 * @return {string[]} - Top k frequent words
 */
function topKFrequent(words, k) {
  // Step 1: Count frequencies
  const frequency = new Map();
  for (const word of words) {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  }
  
  // Step 2: Get all unique words and sort
  const uniqueWords = Array.from(frequency.keys());
  
  uniqueWords.sort((a, b) => {
    const freqA = frequency.get(a);
    const freqB = frequency.get(b);
    
    // First sort by frequency (descending)
    if (freqA !== freqB) {
      return freqB - freqA;
    }
    
    // If frequencies are equal, sort alphabetically (ascending); use 'en' for stable test output
    return a.localeCompare(b, 'en');
  });
  
  // Step 3: Return top k words
  return uniqueWords.slice(0, k);
}

// Test cases
console.log('Example 1:', topKFrequent(["the", "daily", "byte", "byte"], 1)); 
// ["byte"]

console.log('Example 2:', topKFrequent(["coding", "is", "fun", "code", "coding", "fun"], 2)); 
// ["coding", "fun"]

console.log('Example 3:', topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)); 
// ["i", "love"]

console.log('Example 4:', topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4)); 
// ["the", "is", "sunny", "day"]`;
    const testCases = [
  {
    "input": "JSON.stringify(topKFrequent([\"the\", \"daily\", \"byte\", \"byte\"], 1))",
    "expected": "[\"byte\"]"
  },
  {
    "input": "JSON.stringify(topKFrequent([\"coding\", \"is\", \"fun\", \"code\", \"coding\", \"fun\"], 2))",
    "expected": "[\"coding\",\"fun\"]"
  },
  {
    "input": "JSON.stringify(topKFrequent([\"i\", \"love\", \"leetcode\", \"i\", \"love\", \"coding\"], 2))",
    "expected": "[\"i\",\"love\"]"
  },
  {
    "input": "JSON.stringify(topKFrequent([\"the\", \"day\", \"is\", \"sunny\", \"the\", \"the\", \"the\", \"sunny\", \"is\", \"is\"], 4))",
    "expected": "[\"the\",\"is\",\"sunny\",\"day\"]"
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
