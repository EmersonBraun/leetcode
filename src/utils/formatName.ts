/**
 * Formats a LeetCode problem name from a path string
 * @param leetCodeItem - Path string like "problems/two-sum"
 * @returns Formatted name like "Two sum"
 */
export function formatName(leetCodeItem: string): string {
  const name = leetCodeItem.split('/').pop() || '';
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase().replace(/-/g, ' ');
}

