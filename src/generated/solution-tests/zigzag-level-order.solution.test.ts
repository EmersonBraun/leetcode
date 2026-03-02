// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("zigzag-level-order", () => {
  describe("JavaScript Zigzag Level Order Traversal Solution", () => {
    const code = `function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * Perform zigzag level order traversal of a binary tree
 * @param {TreeNode} root - Root of the binary tree
 * @return {number[][]} - Zigzag level order traversal result
 */
function zigzagLevelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (!leftToRight) {
      currentLevel.reverse();
    }

    result.push(currentLevel);
    leftToRight = !leftToRight;
  }

  return result;
}

// Test case 1: [1,2,3]
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

// Test case 2: [8,2,29,null,null,3,9]
const tree2 = new TreeNode(8);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(29);
tree2.right.left = new TreeNode(3);
tree2.right.right = new TreeNode(9);

// Test cases
console.log(zigzagLevelOrder(tree1)); // [[1],[3,2]]
console.log(zigzagLevelOrder(tree2)); // [[8],[29,2],[3,9]]
console.log(zigzagLevelOrder(null)); // []
`;
    const testCases = [
  {
    "input": "JSON.stringify(zigzagLevelOrder(tree1))",
    "expected": "[[1],[3,2]]"
  },
  {
    "input": "JSON.stringify(zigzagLevelOrder(tree2))",
    "expected": "[[8],[29,2],[3,9]]"
  },
  {
    "input": "JSON.stringify(zigzagLevelOrder(null))",
    "expected": "[]"
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
