import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import CodeRunner from '../CodeRunner';

describe('CodeRunner', () => {
  const defaultProps = {
    language: 'javascript' as const,
    title: 'Test Solution',
    code: 'function add(a, b) { return a + b; }',
    testCases: [
      { input: 'add(1, 2)', expected: '3' },
      { input: 'add(0, 0)', expected: '0' },
    ],
  };

  it('renders title and run button', () => {
    render(<CodeRunner {...defaultProps} />);
    expect(screen.getByRole('heading', { name: /test solution/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /run code/i })).toBeInTheDocument();
  });

  it('renders code block with solution code', () => {
    render(<CodeRunner {...defaultProps} />);
    expect(screen.getByText(/function add\(a, b\)/)).toBeInTheDocument();
  });

  it('shows output area with placeholder when not run', () => {
    render(<CodeRunner {...defaultProps} />);
    expect(screen.getByText(/click "run code" to execute/i)).toBeInTheDocument();
  });

  it('displays test results after run', async () => {
    const user = userEvent.setup();
    render(<CodeRunner {...defaultProps} />);
    await user.click(screen.getByRole('button', { name: /run code/i }));
    await screen.findByText(/test results/i);
    expect(screen.getByText(/PASSED/)).toBeInTheDocument();
  });

  it('renders copy and clear output buttons', () => {
    render(<CodeRunner {...defaultProps} />);
    expect(screen.getByTitle(/copy code/i)).toBeInTheDocument();
    expect(screen.getByTitle(/clear output/i)).toBeInTheDocument();
  });
});
