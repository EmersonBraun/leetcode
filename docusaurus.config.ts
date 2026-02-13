import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import 'dotenv/config';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'LeetCode Solutions',
  tagline: 'LeetCode Solutions',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://emersonbraun.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/leetcode/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EmersonBraun', // Usually your GitHub org/user name.
  projectName: 'leetcode', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['pt-BR', 'en', 'es'],
    localeConfigs: {
      'pt-BR': {
        label: 'Português',
        direction: 'ltr',
      },
      'en': {
        label: 'English',
        direction: 'ltr',
      },
      'es': {
        label: 'Español',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EmersonBraun/leetcode/blob/master',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],



  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content: 'leetcode, solutions, documentation, guide, tutorial',
      },
      {
        name: 'algolia-site-verification',
        content: '1ACD95D7BD65423A',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Home Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'LeetCode Solutions',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/EmersonBraun/leetcode',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'LeetCode Solutions',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'Website', href: 'https://emersonbraun.dev/' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/emerson-braun/' },
            { label: 'X / Twitter', href: 'https://x.com/EmersonfBraun' },
            { label: 'Instagram', href: 'https://www.instagram.com/emerson.braun.dev/' },
            { label: 'YouTube', href: 'https://www.youtube.com/@emerson.braun_dev' },
          ],
        },
      ],
      copyright: `LeetCode Solutions. Created by <a href="https://www.linkedin.com/in/emerson-braun/" target="_blank">Emerson Braun</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || 'demo',
      apiKey: process.env.ALGOLIA_API_KEY || 'demo',
      indexName: 'leetcode',
      contextualSearch: false,
      searchParameters: {
        facetFilters: [],
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
