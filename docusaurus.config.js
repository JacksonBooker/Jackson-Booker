// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jackson Booker Documentation',
  tagline: 'Redefining The World, One Solution At A Time.',
  favicon: 'img/jackson-logo.ico',

  // Adding Own Script from error
  markdown: {
  format: 'detect',
},

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jacksonbooker.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jackson Booker', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  onBrokenLinks: 'ignore',

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
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Jackson Booker',
        logo: {
          alt: 'Jackson Booker Logo',
          src: 'img/jackson-logo.svg',
        },
        items: [
          {
             to: '/docs/General/How To Write Good Documentation',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.linkedin.com/in/jacksonbooker/',
            label: 'Linkedin',
            position: 'right',
          },
          {
            href: 'https://github.com/JacksonBooker',
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
                label: 'Documentation',
                to: '/docs/General/How To Write Good Documentation',
              },
            ],
          },
          {
            title: 'Common Apps',
            items: [
              {
                label: 'Plex',
                href: 'https://watch.plex.tv/account/sign-in?forwardUrl=%2F%3F',
              },
              {
                label: 'Tailscale',
                href: 'https://login.tailscale.com/login',
              },
              {
                label: 'Synology DS425+ Manual',
                href: 'https://kb.synology.com/en-in/HIGs/DS425p_HIG/1',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/JacksonBooker/Jackson-Booker',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/jacksonbooker/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jackson's Documentation, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
