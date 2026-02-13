import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home from '../Home';

vi.mock('@docusaurus/Link', () => ({
  __esModule: true,
  default: ({ to, children, ...props }: { to: string; children?: React.ReactNode }) =>
    React.createElement('a', { href: to, ...props }, children),
}));

vi.mock('../../../sidebars', () => ({
  __esModule: true,
  default: {
    tutorialSidebar: [
      { type: 'category', label: 'Home', items: ['index'] },
      {
        type: 'category',
        label: 'LeetCode Problems',
        items: ['problems/two-sum', 'problems/palindrome-check'],
      },
    ],
  },
}));

vi.mock('../../pages/index.module.css', () => ({
  default: {
    home: 'home',
    searchContainer: 'searchContainer',
    searchWrapper: 'searchWrapper',
    searchInput: 'searchInput',
    clearButton: 'clearButton',
    searchInfo: 'searchInfo',
    leetCodeCategories: 'leetCodeCategories',
    leetCodeCategory: 'leetCodeCategory',
    leetCodeProblems: 'leetCodeProblems',
  },
}));

describe('Home', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('renders search input', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/search for problems/i)).toBeInTheDocument();
  });

  it('renders category heading and problem links', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /leetcode problems/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /two sum/i })).toHaveAttribute('href', '/docs/problems/two-sum');
    expect(screen.getByRole('link', { name: /palindrome check/i })).toHaveAttribute('href', '/docs/problems/palindrome-check');
  });

  it('filters problems when typing in search', async () => {
    const user = userEvent.setup();
    render(<Home />);
    await user.type(screen.getByPlaceholderText(/search for problems/i), 'two');
    expect(screen.getByText(/\d+ problems found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /two sum/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /palindrome check/i })).not.toBeInTheDocument();
  });

  it('shows no results message when search matches nothing', async () => {
    const user = userEvent.setup();
    render(<Home />);
    await user.type(screen.getByPlaceholderText(/search for problems/i), 'xyznonexistent');
    expect(screen.getByText(/no problems found/i)).toBeInTheDocument();
  });
});
