// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NineBit CIQ Docs",
  tagline: "LLM Orchestration Platform",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.ninebitciq.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NineBit-Computing", // Usually your GitHub org/user name.
  projectName: "ciq-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          // sidebarPath: require.resolve('./sidebars.js'),
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/ninebit-social-preview.png",
      navbar: {
        title: "DOCS",
        logo: {
          alt: "NineBit CIQ Logo",
          src: "img/CIQ_Logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "HOME",
          },
          { to: "/quickstart", label: "Quickstart", position: "left" },
          { to: "/components", label: "Components", position: "left" },
          { to: "/benchmark", label: "Benchmark", position: "left" },
          { to: "https://ciq.ninebit.in", label: "Website", position: "right" },

          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/NineBit-Computing",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://join.slack.com/t/ninebit-ciq-community/shared_invite/zt-38oi663on-9R~0J8echKGQ8NV2zRKJZA",
              },
              {
                label: "X",
                href: "https://x.com/NinebitC",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/ninebit-computing",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: "GitHub",
                href: "https://github.com/NineBit-Computing",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About Us",
                href: "https://ninebitciq.com/ciq",
              },
              {
                label: "Privacy Policy",
                href: "https://ninebitciq.com/privacy-policy",
              },
              {
                label: "Terms & Conditions",
                href: "https://ninebitciq.com/terms-and-conditions",
              },
              {
                label: "Media & Press Inquiries",
                href: "https://ninebitciq.com/press-and-media",
              },
            ],
          },
        ],
        copyright: `Copyright © <a href="https://ninebitciq.com" target="_blank" rel="noopener noreferrer" style="color:#ffffff;">NineBit Computing</a> ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: "WA4X679QK4",
        apiKey: "b7ee116b44c92eaba0135e16fd2bb153",
        indexName: "docs-search-cr",
      },
    }),
};

export default config;
