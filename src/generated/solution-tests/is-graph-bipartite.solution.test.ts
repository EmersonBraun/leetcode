// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("is-graph-bipartite", () => {
  describe("JavaScript Solution - BFS Coloring", () => {
    const code = `/**
 * Check if graph is bipartite
 * @param {number[][]} graph - Adjacency list representation of graph
 * @return {boolean} - True if graph is bipartite
 */
function isBipartite(graph) {
  const n = graph.length;
  const colors = new Array(n).fill(-1); // -1 = uncolored, 0 = color A, 1 = color B
  
  // Check each connected component
  for (let i = 0; i < n; i++) {
    if (colors[i] === -1) {
      // Start BFS from uncolored node
      if (!bfsColor(graph, i, colors)) {
        return false;
      }
    }
  }
  
  return true;
}

/**
 * BFS to color the graph
 * @param {number[][]} graph - Adjacency list
 * @param {number} start - Starting node
 * @param {number[]} colors - Color array
 * @return {boolean} - True if coloring is valid
 */
function bfsColor(graph, start, colors) {
  const queue = [start];
  colors[start] = 0; // Color first node with color 0
  
  while (queue.length > 0) {
    const node = queue.shift();
    const currentColor = colors[node];
    
    // Color all neighbors with opposite color
    for (const neighbor of graph[node]) {
      if (colors[neighbor] === -1) {
        // Uncolored neighbor: assign opposite color
        colors[neighbor] = 1 - currentColor;
        queue.push(neighbor);
      } else if (colors[neighbor] === currentColor) {
        // Neighbor has same color: conflict!
        return false;
      }
    }
  }
  
  return true;
}

// Test cases
console.log('Example 1:', isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]])); // true
console.log('Example 2:', isBipartite([[1, 2], [0, 2, 3], [0, 1, 3], [0, 2]])); // false
console.log('Example 3:', isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])); // false
console.log('Test 4:', isBipartite([[1], [0, 3], [3], [1, 2]])); // true`;
    const testCases = [
  {
    "input": "isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]])",
    "expected": "true"
  },
  {
    "input": "isBipartite([[1, 2], [0, 2, 3], [0, 1, 3], [0, 2]])",
    "expected": "false"
  },
  {
    "input": "isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])",
    "expected": "false"
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
