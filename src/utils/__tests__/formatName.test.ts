import { describe, it, expect } from 'vitest';
import { formatName } from '../formatName';

describe('formatName', () => {
  it('formats problems/two-sum to Title Case "Two Sum"', () => {
    expect(formatName('problems/two-sum')).toBe('Two Sum');
  });

  it('formats problems/binary-search-tree to Title Case "Binary Search Tree"', () => {
    expect(formatName('problems/binary-search-tree')).toBe('Binary Search Tree');
  });

  it('handles single segment path', () => {
    expect(formatName('two-sum')).toBe('Two Sum');
  });

  it('returns empty string for empty input', () => {
    expect(formatName('')).toBe('');
  });

  it('replaces hyphens with spaces and applies Title Case', () => {
    expect(formatName('problems/palindrome-check')).toBe('Palindrome Check');
  });
});
