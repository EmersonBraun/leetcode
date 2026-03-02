// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("bst-mode", () => {
  describe("JavaScript BST Mode Solution", () => {
    const code = `function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * Find the mode in a BST
 * @param {TreeNode} root - Root of the BST
 * @return {number} - Mode of the BST or -1 if empty
 */
function findMode(root) {
  if (!root) return -1;

  let currVal = null;
  let currCount = 0;
  let maxCount = 0;
  let mode = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    if (node.val === currVal) {
      currCount++;
    } else {
      currVal = node.val;
      currCount = 1;
    }

    if (currCount > maxCount) {
      maxCount = currCount;
      mode = node.val;
    }

    inorder(node.right);
  }

  inorder(root);
  return mode;
}

// Test case 1: [2,1,2]
const tree1 = new TreeNode(2);
tree1.left = new TreeNode(1);
tree1.right = new TreeNode(2);

// Test case 2: [7,4,9,1,4,8,9,null,null,9]
const tree2 = new TreeNode(7);
tree2.left = new TreeNode(4);
tree2.right = new TreeNode(9);
tree2.left.left = new TreeNode(1);
tree2.left.right = new TreeNode(4);
tree2.right.left = new TreeNode(8);
tree2.right.right = new TreeNode(9);
tree2.right.right.right = new TreeNode(9);

// Test cases
console.log(findMode(tree1)); // 2
console.log(findMode(tree2)); // 9
console.log(findMode(null)); // -1
`;
    const testCases = [
  {
    "input": "findMode(tree1)",
    "expected": "2"
  },
  {
    "input": "findMode(tree2)",
    "expected": "9"
  },
  {
    "input": "findMode(null)",
    "expected": "-1"
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
