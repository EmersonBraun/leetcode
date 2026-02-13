// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("implement-trie", () => {
  describe("JavaScript Solution - Trie Implementation", () => {
    const code = `/**
 * Trie Node class
 */
class TrieNode {
  constructor() {
    this.children = new Map(); // Map<char, TrieNode>
    this.isEndOfWord = false; // Marks end of a word
  }
}

/**
 * Trie class
 */
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  /**
   * Insert a word into the trie
   * @param {string} word - Word to insert
   * @return {void}
   */
  insert(word) {
    let current = this.root;
    
    for (const char of word) {
      // If character doesn't exist, create new node
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      // Move to next node
      current = current.children.get(char);
    }
    
    // Mark end of word
    current.isEndOfWord = true;
  }
  
  /**
   * Search for a word in the trie
   * @param {string} word - Word to search
   * @return {boolean} - True if word exists
   */
  search(word) {
    let current = this.root;
    
    for (const char of word) {
      // If character doesn't exist, word not found
      if (!current.children.has(char)) {
        return false;
      }
      // Move to next node
      current = current.children.get(char);
    }
    
    // Check if it's a complete word (not just a prefix)
    return current.isEndOfWord;
  }
  
  /**
   * Check if there's any word starting with the given prefix
   * @param {string} prefix - Prefix to check
   * @return {boolean} - True if prefix exists
   */
  startsWith(prefix) {
    let current = this.root;
    
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    
    return true; // Prefix exists (may or may not be complete word)
  }
}

// Test cases
const trie = new Trie();
trie.insert("programming");
console.log('Search "computer":', trie.search("computer")); // false
console.log('Search "programming":', trie.search("programming")); // true
console.log('StartsWith "prog":', trie.startsWith("prog")); // true`;
    const testCases = [
  {
    "input": "(trie => { trie.insert(\"programming\"); return trie.search(\"programming\"); })(new Trie())",
    "expected": "true"
  },
  {
    "input": "(trie => { trie.insert(\"programming\"); return trie.search(\"computer\"); })(new Trie())",
    "expected": "false"
  },
  {
    "input": "(trie => { trie.insert(\"apple\"); return trie.search(\"app\"); })(new Trie())",
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
