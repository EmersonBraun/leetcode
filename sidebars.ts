import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Home',
      items: ['index'],
    },
    {
      type: 'category',
      label: 'LeetCode Problems',
      items: [
        {
          type: 'category',
          label: 'Arrays & Hash Tables',
          items: [
            'problems/two-sum',
          ],
        },
        {
          type: 'category',
          label: 'Trees & Binary Search Trees',
          items: [
            'problems/binary-search-tree',
            'problems/increasing-bst',
            'problems/lowest-common-ancestor-bst',
            'problems/minimum-difference-bst',
            'problems/sorted-array-to-bst',
            'problems/bst-mode',
            'problems/same-tree',
            'problems/max-depth-binary-tree',
          ],
        },
        {
          type: 'category',
          label: 'Tree Traversal & BFS',
          items: [
            'problems/level-order-traversal',
            'problems/zigzag-level-order',
            'problems/bottom-up-level-order',
            'problems/left-side-view',
            'problems/max-value-per-level',
            'problems/column-order-traversal',
            'problems/n-ary-tree-level-order',
          ],
        },
        {
          type: 'category',
          label: 'Design & Data Structures',
          items: [
            'problems/implement-stack-using-queue',
            'problems/moving-average',
            'problems/number-of-recent-calls',
          ],
        },
        {
          type: 'category',
          label: 'Strings & Two Pointers',
          items: [
            'problems/palindrome-check',
          ],
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
