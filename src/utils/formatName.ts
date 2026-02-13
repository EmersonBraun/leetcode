/**
 * Formats a LeetCode problem name from a path string (Title Case).
 * @param leetCodeItem - Path string like "problems/two-sum"
 * @returns Formatted name like "Two Sum"
 */
export function formatName(leetCodeItem: string): string {
  const name = leetCodeItem.split('/').pop() || '';
  return name
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

