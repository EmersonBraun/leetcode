// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("max-depth-binary-tree", () => {
  describe("JavaScript Maximum Depth Solution", () => {
    const code = `function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * Find the maximum depth of a binary tree
 * @param {TreeNode} root - Root of the binary tree
 * @return {number} - Maximum depth
 */
function maxDepth(root) {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Test case 1: [9,1,2]
const tree1 = new TreeNode(9);
tree1.left = new TreeNode(1);
tree1.right = new TreeNode(2);

// Test case 2: [5,1,29,null,null,4,13]
const tree2 = new TreeNode(5);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(29);
tree2.right.left = new TreeNode(4);
tree2.right.right = new TreeNode(13);

// Test cases
console.log(maxDepth(tree1)); // 2
console.log(maxDepth(tree2)); // 3
console.log(maxDepth(null)); // 0
`;
    const testCases = [
  {
    "input": "maxDepth(tree1)",
    "expected": "2"
  },
  {
    "input": "maxDepth(tree2)",
    "expected": "3"
  },
  {
    "input": "maxDepth(null)",
    "expected": "0"
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
