// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("kth-smallest-element-in-bst", () => {
  describe("JavaScript Solution - In-Order Traversal", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Find kth smallest element in BST
 * @param {TreeNode} root - Root of the BST
 * @param {number} k - Kth smallest (1-indexed)
 * @return {number} - Kth smallest value
 */
function kthSmallest(root, k) {
  let count = 0;
  let result = null;
  
  /**
   * In-order traversal helper
   * @param {TreeNode} node - Current node
   */
  function inOrder(node) {
    if (!node || result !== null) return; // Early termination
    
    // Traverse left subtree
    inOrder(node.left);
    
    // Process current node
    count++;
    if (count === k) {
      result = node.val;
      return; // Found it, can stop
    }
    
    // Traverse right subtree
    inOrder(node.right);
  }
  
  inOrder(root);
  return result;
}

// Helper function to create a tree node
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

// Test case 1: [3, 2, 4], k = 1
const tree1 = new TreeNode(3);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(4);
console.log('Example 1:', kthSmallest(tree1, 1)); // 2

// Test case 2: [7, 3, 9, null, 5], k = 3
const tree2 = new TreeNode(7);
tree2.left = new TreeNode(3);
tree2.right = new TreeNode(9);
tree2.left.right = new TreeNode(5);
console.log('Example 2:', kthSmallest(tree2, 3)); // 7

// Test case 3: [5, 3, 6, 2, 4, null, 7], k = 3
const tree3 = new TreeNode(5);
tree3.left = new TreeNode(3);
tree3.right = new TreeNode(6);
tree3.left.left = new TreeNode(2);
tree3.left.right = new TreeNode(4);
tree3.right.right = new TreeNode(7);
console.log('Example 3:', kthSmallest(tree3, 3)); // 4`;
    const testCases = [
  {
    "input": "(() => { const t = new TreeNode(3, new TreeNode(2), new TreeNode(4)); return kthSmallest(t, 1); })()",
    "expected": "2"
  },
  {
    "input": "(() => { const t = new TreeNode(7, new TreeNode(3, null, new TreeNode(5)), new TreeNode(9)); return kthSmallest(t, 3); })()",
    "expected": "7"
  },
  {
    "input": "(() => { const t = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7))); return kthSmallest(t, 3); })()",
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
