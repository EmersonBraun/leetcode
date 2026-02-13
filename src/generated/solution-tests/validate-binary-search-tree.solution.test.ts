// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("validate-binary-search-tree", () => {
  describe("JavaScript Solution - DFS with Bounds", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Check if binary tree is a valid BST
 * @param {TreeNode} root - Root of binary tree
 * @return {boolean} - Whether tree is a valid BST
 */
function isValidBST(root) {
  /**
   * Helper function to validate with bounds
   * @param {TreeNode} node - Current node
   * @param {number} min - Minimum allowed value
   * @param {number} max - Maximum allowed value
   * @return {boolean} - Whether subtree is valid BST
   */
  function validate(node, min, max) {
    // Base case: null nodes are valid
    if (!node) return true;
    
    // Check if current node value is within bounds
    if (node.val <= min || node.val >= max) {
      return false;
    }
    
    // Recursively validate left and right subtrees
    // Left subtree: all values must be < node.val, so max = node.val
    // Right subtree: all values must be > node.val, so min = node.val
    return validate(node.left, min, node.val) && 
           validate(node.right, node.val, max);
  }
  
  // Start with unbounded range (use Infinity for bounds)
  return validate(root, -Infinity, Infinity);
}

// Helper function to create tree nodes for testing
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Test cases
// Example 1: [1, 2, 3]
const tree1 = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3)
);
console.log('Example 1:', isValidBST(tree1)); // false

// Example 2: [2, 1, 3]
const tree2 = new TreeNode(2,
  new TreeNode(1),
  new TreeNode(3)
);
console.log('Example 2:', isValidBST(tree2)); // true

// Example 3: [5, 1, 4, null, null, 3, 6]
const tree3 = new TreeNode(5,
  new TreeNode(1),
  new TreeNode(4, new TreeNode(3), new TreeNode(6))
);
console.log('Example 3:', isValidBST(tree3)); // false`;
    const testCases = [
  {
    "input": "isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)))",
    "expected": "true"
  },
  {
    "input": "isValidBST(new TreeNode(1, new TreeNode(2), new TreeNode(3)))",
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
