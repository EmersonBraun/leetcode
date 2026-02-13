// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("level-up-bst", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Level up a BST by adding sum of all larger values to each node
 * @param {TreeNode} root - Root of the binary search tree
 * @return {TreeNode} - Modified tree (modifies in place)
 */
function levelUpBST(root) {
  let sum = 0; // Accumulated sum of all values larger than current node
  
  function reverseInOrder(node) {
    if (!node) return;
    
    // Traverse right subtree first (larger values)
    reverseInOrder(node.right);
    
    // Process current node: add sum of all larger values
    const originalVal = node.val;
    node.val += sum;
    
    // Update sum to include this node's original value
    sum += originalVal;
    
    // Traverse left subtree (smaller values)
    reverseInOrder(node.left);
  }
  
  reverseInOrder(root);
  return root;
}

// Helper function to create a tree node
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

// Helper function to print tree (in-order)
function printInOrder(root) {
  if (!root) return [];
  return [...printInOrder(root.left), root.val, ...printInOrder(root.right)];
}

// Test case 1: [0, null, 3]
const tree1 = new TreeNode(0);
tree1.right = new TreeNode(3);
levelUpBST(tree1);
console.log('Example 1:', printInOrder(tree1)); // [3, 3]

// Test case 2: [2, 1, 3]
const tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);
levelUpBST(tree2);
console.log('Example 2:', printInOrder(tree2)); // [6, 5, 3]

// Test case 3: [4, 2, 6, 1, 3, 5, 7]
const tree3 = new TreeNode(4);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(6);
tree3.left.left = new TreeNode(1);
tree3.left.right = new TreeNode(3);
tree3.right.left = new TreeNode(5);
tree3.right.right = new TreeNode(7);
levelUpBST(tree3);
console.log('Example 3:', printInOrder(tree3)); // [28, 27, 25, 22, 18, 13, 7]`;
    const testCases = [
  {
    "input": "(() => { const t = new TreeNode(0, null, new TreeNode(3)); levelUpBST(t); return printInOrder(t).join(\",\"); })()",
    "expected": "3,3"
  },
  {
    "input": "(() => { const t = new TreeNode(2, new TreeNode(1), new TreeNode(3)); levelUpBST(t); return printInOrder(t).join(\",\"); })()",
    "expected": "6,5,3"
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
