// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("binary-search-tree", () => {
  describe("JavaScript Recursive Solution", () => {
    const code = `
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * Search in a binary search tree recursively
 * @param {TreeNode} root - Root of the BST
 * @param {number} val - Value to search
 * @return {TreeNode} - Node containing the value or null
 */
function searchBST(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
}

// Create test tree: [3,1,4]
const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);

// Test cases
console.log(searchBST(root, 1)?.val); // 1
console.log(searchBST(root, 4)?.val); // 4
console.log(searchBST(root, 7)); // null`;
    const testCases = [
  {
    "input": "searchBST(root, 1)?.val",
    "expected": "1"
  },
  {
    "input": "searchBST(root, 4)?.val",
    "expected": "4"
  },
  {
    "input": "searchBST(root, 7)",
    "expected": "null"
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
  describe("JavaScript Iterative Solution", () => {
    const code = `
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * Search in a binary search tree iteratively
 * @param {TreeNode} root - Root of the BST
 * @param {number} val - Value to search
 * @return {TreeNode} - Node containing the value or null
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function searchBSTIterative(root, val) {
  let current = root;
  while (current) {
    if (current.val === val) return current;
    if (val < current.val) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

// Create test tree: [7,5,9,null,null,8,10]
const root = new TreeNode(7);
root.left = new TreeNode(5);
root.right = new TreeNode(9);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(10);

// Test cases
console.log(searchBSTIterative(root, 9)?.val); // 9
console.log(searchBSTIterative(root, 8)?.val); // 8
console.log(searchBSTIterative(root, 6)); // null`;
    const testCases = [
  {
    "input": "searchBSTIterative(root, 9)?.val",
    "expected": "9"
  },
  {
    "input": "searchBSTIterative(root, 8)?.val",
    "expected": "8"
  },
  {
    "input": "searchBSTIterative(root, 6)",
    "expected": "null"
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
