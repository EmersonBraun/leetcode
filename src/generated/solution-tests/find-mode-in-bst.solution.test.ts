// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("find-mode-in-bst", () => {
  describe("JavaScript Solution - Hash Map", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Find mode in BST
 * @param {TreeNode} root - Root of binary search tree
 * @return {number} - Mode (most frequent value)
 */
function findMode(root) {
  if (!root) return -1;
  
  const freq = new Map();
  let maxFreq = 0;
  let mode = -1;
  
  /**
   * DFS to count frequencies
   */
  function dfs(node) {
    if (!node) return;
    
    // Count current node value
    const count = (freq.get(node.val) || 0) + 1;
    freq.set(node.val, count);
    
    // Update mode if current value has higher frequency
    if (count > maxFreq) {
      maxFreq = count;
      mode = node.val;
    }
    
    // Recursively process children
    dfs(node.left);
    dfs(node.right);
  }
  
  dfs(root);
  return mode;
}

// Helper function to create tree nodes for testing
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Test cases
// Example 1: [2, 1, 2]
const tree1 = new TreeNode(2,
  new TreeNode(1),
  new TreeNode(2)
);
console.log('Example 1:', findMode(tree1)); // 2

// Example 2: [7, 4, 9, 1, 4, 8, 9, null, null, null, null, null, 9]
const tree2 = new TreeNode(7,
  new TreeNode(4, new TreeNode(1), new TreeNode(4)),
  new TreeNode(9, new TreeNode(8), new TreeNode(9, null, new TreeNode(9)))
);
console.log('Example 2:', findMode(tree2)); // 9`;
    const testCases = [
  {
    "input": "findMode(new TreeNode(2, new TreeNode(1), new TreeNode(2)))",
    "expected": "2"
  },
  {
    "input": "findMode(new TreeNode(7, new TreeNode(4, new TreeNode(1), new TreeNode(4)), new TreeNode(9, new TreeNode(8), new TreeNode(9, null, new TreeNode(9)))))",
    "expected": "9"
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
