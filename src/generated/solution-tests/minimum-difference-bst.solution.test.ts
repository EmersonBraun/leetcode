// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("minimum-difference-bst", () => {
  describe("JavaScript Minimum Difference Solution", () => {
    const code = `
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * Find minimum difference between any two nodes in a BST
 * @param {TreeNode} root - Root of the BST
 * @return {number} - Minimum difference
 */
function minDiffInBST(root) {
  let prev = null;
  let minDiff = Infinity;
  
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;
    inorder(node.right);
  }
  
  inorder(root);
  return minDiff;
}

// Test case 1: [2,1,3]
const tree1 = new TreeNode(2);
tree1.left = new TreeNode(1);
tree1.right = new TreeNode(3);

// Test case 2: [29,17,50,1,null,42,59]
const tree2 = new TreeNode(29);
tree2.left = new TreeNode(17);
tree2.right = new TreeNode(50);
tree2.left.left = new TreeNode(1);
tree2.right.left = new TreeNode(42);
tree2.right.right = new TreeNode(59);

// Test case 3: [2,null,100]
const tree3 = new TreeNode(2);
tree3.right = new TreeNode(100);

// Test cases
console.log(minDiffInBST(tree1)); // 1
console.log(minDiffInBST(tree2)); // 8
console.log(minDiffInBST(tree3)); // 98
`;
    const testCases = [
  {
    "input": "minDiffInBST(tree1)",
    "expected": "1"
  },
  {
    "input": "minDiffInBST(tree2)",
    "expected": "8"
  },
  {
    "input": "minDiffInBST(tree3)",
    "expected": "98"
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
