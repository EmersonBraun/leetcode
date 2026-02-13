// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("defanging-ip-address", () => {
  describe("JavaScript Solution - Replace", () => {
    const code = `/**
 * Defang IP address by replacing "." with "[.]"
 * @param {string} address - Valid IP address
 * @return {string} - Defanged IP address
 */
function defangIPaddr(address) {
  // Replace all occurrences of "." with "[.]"
  return address.replace(/\\./g, '[.]');
}

// Test cases
console.log('Example 1:', defangIPaddr("127.0.0.1")); 
// "127[.]0[.]0[.]1"

console.log('Example 2:', defangIPaddr("1.1.1.1")); 
// "1[.]1[.]1[.]1"

console.log('Example 3:', defangIPaddr("255.100.50.0")); 
// "255[.]100[.]50[.]0"

console.log('Test 4:', defangIPaddr("192.168.1.1")); 
// "192[.]168[.]1[.]1"`;
    const testCases = [
  {
    "input": "defangIPaddr(\"127.0.0.1\")",
    "expected": "\"127[.]0[.]0[.]1\""
  },
  {
    "input": "defangIPaddr(\"1.1.1.1\")",
    "expected": "\"1[.]1[.]1[.]1\""
  },
  {
    "input": "defangIPaddr(\"255.100.50.0\")",
    "expected": "\"255[.]100[.]50[.]0\""
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
