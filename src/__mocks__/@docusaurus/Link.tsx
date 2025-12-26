import React from 'react';

interface LinkProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const Link = ({ to, children, ...props }: LinkProps) => {
  return React.createElement('a', { href: to, ...props }, children);
};

export default Link;

