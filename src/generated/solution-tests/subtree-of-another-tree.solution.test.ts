// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("subtree-of-another-tree", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : null)
 * }
 */

/**
 * Check if t is a subtree of s
 * @param {TreeNode} s - Main tree
 * @param {TreeNode} t - Subtree to check
 * @return {boolean} - True if t is a subtree of s
 */
function isSubtree(s, t) {
  // Base case: if s is null, t cannot be a subtree
  if (!s) return false;
  
  // Check if current subtree of s matches t
  if (isSameTree(s, t)) {
    return true;
  }
  
  // Recursively check left and right subtrees
  return isSubtree(s.left, t) || isSubtree(s.right, t);
}

/**
 * Check if two trees are identical
 * @param {TreeNode} s - First tree
 * @param {TreeNode} t - Second tree
 * @return {boolean} - True if trees are identical
 */
function isSameTree(s, t) {
  // Both null: identical
  if (!s && !t) return true;
  
  // One null, one not: not identical
  if (!s || !t) return false;
  
  // Values must match
  if (s.val !== t.val) return false;
  
  // Both subtrees must be identical
  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}

// Helper function to create TreeNode
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : null);
}

// Test cases
// Example 1: s = [1,3,8], t = [1,null,8]
const s1 = new TreeNode(1);
s1.left = new TreeNode(3);
s1.right = new TreeNode(8);
const t1 = new TreeNode(1);
t1.right = new TreeNode(8);
console.log('Example 1:', isSubtree(s1, t1)); // false

// Example 2: s = [7,8,3], t = [7,8,3]
const s2 = new TreeNode(7);
s2.left = new TreeNode(8);
s2.right = new TreeNode(3);
const t2 = new TreeNode(7);
t2.left = new TreeNode(8);
t2.right = new TreeNode(3);
console.log('Example 2:', isSubtree(s2, t2)); // true`;
    const testCases = [
  {
    "input": "isSubtree(new TreeNode(1, new TreeNode(3), new TreeNode(8)), new TreeNode(1, null, new TreeNode(8)))",
    "expected": "false"
  },
  {
    "input": "isSubtree(new TreeNode(7, new TreeNode(8), new TreeNode(3)), new TreeNode(7, new TreeNode(8), new TreeNode(3)))",
    "expected": "true"
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
