// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NineBit CIQ Docs',
  tagline: 'CIQ is cool',
  favicon: 'img/favicon3.ico',



  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ninebit-computing.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ciq-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NineBit-Computing', // Usually your GitHub org/user name.
  projectName: 'ciq-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // or '/docs' if preferred
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Next 🚧',
              banner: 'none',
            },
            '1.0.0': {
            label: 'v1 (Stable)',
            banner: 'none',
            },
          },           
        },

        // docs: {
        //   routeBasePath: '/',
        //   // sidebarPath: require.resolve('./sidebars.js'),
        //   sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //     // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //     // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Preview_image.png',
      navbar: {

        title: 'Docs',

        logo: {
            alt: 'My Site Logo',
            src: 'img/CIQ_Logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: false,
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/NineBit-Computing',
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
              // {
              //   label: 'Tutorial',
              //   to: '/docs/intro',
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/ninebit-ciq-community/shared_invite/zt-38oi663on-9R~0J8echKGQ8NV2zRKJZA',
              },
              {
                label: 'X',
                href: 'https://x.com/NinebitC',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/ninebit-computing/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/NineBit-Computing',
              },
            ],
          },
        ],
        copyright: `Copyright © <a href="https://ninebit.in" target="_blank" rel="noopener noreferrer" style="color:#ffffff;">NineBit Computing</a> ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
