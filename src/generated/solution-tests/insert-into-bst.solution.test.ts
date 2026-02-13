// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("insert-into-bst", () => {
  describe("JavaScript Solution - Recursive", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : null)
 * }
 */

/**
 * Insert value into BST
 * @param {TreeNode} root - Root of the BST
 * @param {number} val - Value to insert
 * @return {TreeNode} - Root of the modified BST
 */
function insertIntoBST(root, val) {
  // Base case: create new node if root is null
  if (!root) {
    return new TreeNode(val);
  }
  
  // Insert into left subtree if value is smaller
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } 
  // Insert into right subtree if value is larger
  else {
    root.right = insertIntoBST(root.right, val);
  }
  
  return root;
}

// Helper function to create TreeNode
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : null);
}

// Test cases
// Example 1: [2,1,3], val = 4
const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
const result1 = insertIntoBST(root1, 4);
console.log('Example 1 - Root value:', result1.val); // 2
console.log('Example 1 - Right right value:', result1.right.right.val); // 4

// Example 2: [4,2,7,1,3], val = 5
const root2 = new TreeNode(4);
root2.left = new TreeNode(2);
root2.right = new TreeNode(7);
root2.left.left = new TreeNode(1);
root2.left.right = new TreeNode(3);
const result2 = insertIntoBST(root2, 5);
console.log('Example 2 - Root value:', result2.val); // 4
console.log('Example 2 - Right left value:', result2.right.left.val); // 5`;
    const testCases = [
  {
    "input": "(() => { const r = new TreeNode(2); r.left = new TreeNode(1); r.right = new TreeNode(3); return insertIntoBST(r, 4).right.right.val; })()",
    "expected": "4"
  },
  {
    "input": "(() => { const r = new TreeNode(4); r.left = new TreeNode(2); r.right = new TreeNode(7); r.left.left = new TreeNode(1); r.left.right = new TreeNode(3); return insertIntoBST(r, 5).right.left.val; })()",
    "expected": "5"
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
