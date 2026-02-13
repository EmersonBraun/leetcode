// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("symmetric-tree", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Check if binary tree is symmetric
 * @param {TreeNode} root - Root of binary tree
 * @return {boolean} - Whether tree is symmetric
 */
function isSymmetric(root) {
  if (!root) return true;
  
  /**
   * Check if two subtrees are mirror images
   * @param {TreeNode} left - Left subtree root
   * @param {TreeNode} right - Right subtree root
   * @return {boolean} - Whether they are mirrors
   */
  function isMirror(left, right) {
    // Base case: both are null
    if (!left && !right) return true;
    
    // Base case: one is null, other is not
    if (!left || !right) return false;
    
    // Values must be equal
    if (left.val !== right.val) return false;
    
    // Recursively check:
    // Left's left must mirror right's right
    // Left's right must mirror right's left
    return isMirror(left.left, right.right) && 
           isMirror(left.right, right.left);
  }
  
  return isMirror(root.left, root.right);
}

// Helper function to create tree nodes for testing
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Test cases
// Example 1: [2, 1, 1]
const tree1 = new TreeNode(2,
  new TreeNode(1),
  new TreeNode(1)
);
console.log('Example 1:', isSymmetric(tree1)); // true

// Example 2: [1, 5, 5, null, 7, null, 7]
const tree2 = new TreeNode(1,
  new TreeNode(5, null, new TreeNode(7)),
  new TreeNode(5, null, new TreeNode(7))
);
console.log('Example 2:', isSymmetric(tree2)); // false

// Example 3: [1, 2, 2, 3, 4, 4, 3]
const tree3 = new TreeNode(1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
console.log('Example 3:', isSymmetric(tree3)); // true`;
    const testCases = [
  {
    "input": "isSymmetric(new TreeNode(2, new TreeNode(1), new TreeNode(1)))",
    "expected": "true"
  },
  {
    "input": "isSymmetric(new TreeNode(1, new TreeNode(5, null, new TreeNode(7)), new TreeNode(5, null, new TreeNode(7))))",
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
