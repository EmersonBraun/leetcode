// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("left-side-view", () => {
  describe("JavaScript Left Side View Solution", () => {
    const code = `
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * Return the left side view of a binary tree
 * @param {TreeNode} root - Root of the binary tree
 * @return {number[]} - Array of values visible from the left side
 */
function leftSideView(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length) {
    const levelSize = queue.length;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (i === 0) result.push(node.val); // Take the first node of each level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  
  return result;
}

// Test case 1: [4,2,7]
const tree1 = new TreeNode(4);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(7);

// Test case 2: [7,4,9,1,4,8,9,null,null,null,9]
const tree2 = new TreeNode(7);
tree2.left = new TreeNode(4);
tree2.right = new TreeNode(9);
tree2.left.left = new TreeNode(1);
tree2.left.right = new TreeNode(4);
tree2.right.left = new TreeNode(8);
tree2.right.right = new TreeNode(9);
tree2.right.right.right = new TreeNode(9);

// Test cases
console.log(leftSideView(tree1)); // [4,2]
console.log(leftSideView(tree2)); // [7,4,1,9]
console.log(leftSideView(null)); // []
`;
    const testCases = [
  {
    "input": "leftSideView(tree1)",
    "expected": "[4,2]"
  },
  {
    "input": "leftSideView(tree2)",
    "expected": "[7,4,1,9]"
  },
  {
    "input": "leftSideView(null)",
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
