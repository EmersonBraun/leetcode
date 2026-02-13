// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("increasing-bst", () => {
  describe("JavaScript Brute Force Solution", () => {
    const code = `function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * Rearrange BST to increasing order using node list
 * @param {TreeNode} root - Root of the BST
 * @return {TreeNode} - Head of the linked list
 */
function increasingBST(root) {
  const nodes = [];
  
  function inorder(node) {
    if (node) {
      inorder(node.left);
      nodes.push(node);
      inorder(node.right);
    }
  }
  
  inorder(root);
  
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
  
  if (nodes.length > 0) {
    nodes[nodes.length - 1].left = null;
    nodes[nodes.length - 1].right = null;
    return nodes[0];
  }
  
  return null;
}

// Helper function to create tree from array
function createTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;
  const root = new TreeNode(arr[index]);
  root.left = createTree(arr, 2 * index + 1);
  root.right = createTree(arr, 2 * index + 2);
  return root;
}

// Helper function to convert tree to array (inorder)
function treeToArray(root) {
  const result = [];
  function inorder(node) {
    if (node) {
      inorder(node.left);
      result.push(node.val);
      inorder(node.right);
    }
  }
  inorder(root);
  return result;
}

// Test cases
const test1 = createTree([5, 1, 6]);
const result1 = increasingBST(test1);
console.log("Tree: [5,1,6] →", treeToArray(result1).join(" -> "));

const test2 = createTree([5, 2, 9, 1, 3]);
const result2 = increasingBST(test2);
console.log("Tree: [5,2,9,1,3] →", treeToArray(result2).join(" -> "));

const test3 = createTree([5, null, 6]);
const result3 = increasingBST(test3);
console.log("Tree: [5,null,6] →", treeToArray(result3).join(" -> "));`;
    const testCases = [
  {
    "input": "treeToArray(increasingBST(createTree([5,1,6])))",
    "expected": "[1,5,6]"
  },
  {
    "input": "treeToArray(increasingBST(createTree([5,2,9,1,3])))",
    "expected": "[1,2,3,5,9]"
  },
  {
    "input": "treeToArray(increasingBST(createTree([5,null,6])))",
    "expected": "[5,6]"
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
  describe("JavaScript Optimized Solution", () => {
    const code = `function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * Rearrange BST to increasing order using recursion
 * @param {TreeNode} root - Root of the BST
 * @return {TreeNode} - Head of the linked list
 */
function increasingBSTOptimized(root) {
  const dummy = new TreeNode();
  let cur = dummy;
  
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    node.left = null;
    cur.right = node;
    cur = node;
    inorder(node.right);
  }
  
  inorder(root);
  return dummy.right;
}

// Helper function to create tree from array
function createTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;
  const root = new TreeNode(arr[index]);
  root.left = createTree(arr, 2 * index + 1);
  root.right = createTree(arr, 2 * index + 2);
  return root;
}

// Helper function to convert tree to array (inorder)
function treeToArray(root) {
  const result = [];
  function inorder(node) {
    if (node) {
      inorder(node.left);
      result.push(node.val);
      inorder(node.right);
    }
  }
  inorder(root);
  return result;
}

// Test cases
const test1 = createTree([5, 1, 6]);
const result1 = increasingBSTOptimized(test1);
console.log("Tree: [5,1,6] →", treeToArray(result1).join(" -> "));

const test2 = createTree([5, 2, 9, 1, 3]);
const result2 = increasingBSTOptimized(test2);
console.log("Tree: [5,2,9,1,3] →", treeToArray(result2).join(" -> "));

const test3 = createTree([5, null, 6]);
const result3 = increasingBSTOptimized(test3);
console.log("Tree: [5,null,6] →", treeToArray(result3).join(" -> "));`;
    const testCases = [
  {
    "input": "treeToArray(increasingBSTOptimized(createTree([5,1,6])))",
    "expected": "[1,5,6]"
  },
  {
    "input": "treeToArray(increasingBSTOptimized(createTree([5,2,9,1,3])))",
    "expected": "[1,2,3,5,9]"
  },
  {
    "input": "treeToArray(increasingBSTOptimized(createTree([5,null,6])))",
    "expected": "[5,6]"
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
