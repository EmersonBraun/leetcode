// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("binary-tree-inorder-traversal-iterative", () => {
  describe("JavaScript Solution - Iterative with Stack", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : null)
 * }
 */

/**
 * Inorder traversal without recursion
 * @param {TreeNode} root - Root of the binary tree
 * @return {number[]} - Inorder traversal result
 */
function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let current = root;
  
  while (current !== null || stack.length > 0) {
    // Go to the leftmost node
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    
    // Current is null, pop from stack
    current = stack.pop();
    result.push(current.val);
    
    // Visit right subtree
    current = current.right;
  }
  
  return result;
}

// Helper function to create TreeNode
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : null);
}

// Test cases
// Example 1: [2,1,3]
const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
console.log('Example 1:', inorderTraversal(root1)); 
// [1, 2, 3]

// Example 2: [2,1,7,4,8]
const root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(7);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(8);
console.log('Example 2:', inorderTraversal(root2)); 
// [4, 1, 8, 2, 7]`;
    const testCases = [
  {
    "input": "JSON.stringify(inorderTraversal(new TreeNode(2, new TreeNode(1), new TreeNode(3))))",
    "expected": "[1,2]"
  },
  {
    "input": "JSON.stringify(inorderTraversal(new TreeNode(2, new TreeNode(1, new TreeNode(4), new TreeNode(8)), new TreeNode(7))))",
    "expected": "[4,1,2]"
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
