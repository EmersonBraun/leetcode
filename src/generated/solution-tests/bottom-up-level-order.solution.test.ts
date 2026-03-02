// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("bottom-up-level-order", () => {
  describe("JavaScript Bottom-Up Level Order Traversal Solution", () => {
    const code = `function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function createTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;
  const root = new TreeNode(arr[index]);
  root.left = createTree(arr, 2 * index + 1);
  root.right = createTree(arr, 2 * index + 2);
  return root;
}

/**
 * Perform bottom-up level order traversal of a binary tree
 * @param {TreeNode} root - Root of the binary tree
 * @return {number[][]} - Bottom-up level order traversal result
 */
function levelOrderBottom(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.unshift(currentLevel);
  }

  return result;
}

// Test cases
console.log(levelOrderBottom(createTree([2,1,2]))); // [[1,2],[2]]
console.log(levelOrderBottom(createTree([7,6,2,3,3]))); // [[3,3],[6,2],[7]]
console.log(levelOrderBottom(null)); // []
`;
    const testCases = [
  {
    "input": "JSON.stringify(levelOrderBottom(createTree([2,1,2])))",
    "expected": "[[1,2],[2]]"
  },
  {
    "input": "JSON.stringify(levelOrderBottom(createTree([7,6,2,3,3])))",
    "expected": "[[3,3],[6,2],[7]]"
  },
  {
    "input": "JSON.stringify(levelOrderBottom(null))",
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
