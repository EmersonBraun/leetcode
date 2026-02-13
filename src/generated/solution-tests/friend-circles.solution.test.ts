// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("friend-circles", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Find number of distinct friend groups
 * @param {number[][]} friends - Adjacency matrix (1=friends, 0=not friends)
 * @return {number} - Number of distinct friend groups
 */
function findCircleNum(friends) {
  if (!friends || friends.length === 0) return 0;
  
  const n = friends.length;
  const visited = new Array(n).fill(false);
  let groups = 0;
  
  /**
   * DFS to mark all friends in the same group
   * @param {number} person - Current person index
   */
  function dfs(person) {
    visited[person] = true;
    
    // Check all other people
    for (let friend = 0; friend < n; friend++) {
      // If they are friends and not visited
      if (friends[person][friend] === 1 && !visited[friend]) {
        dfs(friend); // Recursively visit friend
      }
    }
  }
  
  // Traverse all people
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // Found a new friend group
      groups++;
      dfs(i); // Mark all friends in this group
    }
  }
  
  return groups;
}

// Test cases
const friends1 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];
console.log('Example 1:', findCircleNum(friends1)); 
// 2

const friends2 = [
  [1, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1]
];
console.log('Example 2:', findCircleNum(friends2)); 
// 2

const friends3 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
];
console.log('Example 3:', findCircleNum(friends3)); 
// 3`;
    const testCases = [
  {
    "input": "findCircleNum([[1,1,0],[1,1,0],[0,0,1]])",
    "expected": "2"
  },
  {
    "input": "findCircleNum([[1,1,0,0],[1,1,1,0],[0,1,1,0],[0,0,0,1]])",
    "expected": "2"
  },
  {
    "input": "findCircleNum([[1,0,0],[0,1,0],[0,0,1]])",
    "expected": "3"
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
