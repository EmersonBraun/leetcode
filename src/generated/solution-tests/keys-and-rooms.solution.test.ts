// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("keys-and-rooms", () => {
  describe("JavaScript Solution - BFS", () => {
    const code = `/**
 * Check if all rooms can be visited
 * @param {number[][]} rooms - Array where rooms[i] contains keys to other rooms
 * @return {boolean} - True if all rooms can be visited
 */
function canVisitAllRooms(rooms) {
  const n = rooms.length;
  const visited = new Set();
  const queue = [0]; // Start with room 0
  visited.add(0);
  
  // BFS to visit all reachable rooms
  while (queue.length > 0) {
    const currentRoom = queue.shift();
    
    // Collect keys from current room
    for (const key of rooms[currentRoom]) {
      if (!visited.has(key)) {
        visited.add(key);
        queue.push(key);
      }
    }
  }
  
  // Check if we visited all rooms
  return visited.size === n;
}

// Test cases
console.log('Example 1:', canVisitAllRooms([[1], [2], []])); // true
console.log('Example 2:', canVisitAllRooms([[1, 2], [2], [0], []])); // false
console.log('Example 3:', canVisitAllRooms([[1], [2], [3], []])); // true
console.log('Test 4:', canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])); // false`;
    const testCases = [
  {
    "input": "canVisitAllRooms([[1], [2], []])",
    "expected": "true"
  },
  {
    "input": "canVisitAllRooms([[1, 2], [2], [0], []])",
    "expected": "false"
  },
  {
    "input": "canVisitAllRooms([[1], [2], [3], []])",
    "expected": "true"
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
