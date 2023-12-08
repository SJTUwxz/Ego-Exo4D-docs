// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EgoExo4D Documentation',
  tagline: 'EgoExo4D Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://fairinternal.github.io/',
  baseUrl: '/',
  organizationName: 'fairinternal',
  projectName: 'Ego-Exo4D-Docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'EgoExo4D',
        logo: {
          alt: 'EgoExo4D Logo',
          src: 'img/logo.png',
        },
        items: [
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              // {
              //   label: 'Annotation Guidelines',
              //   to: '/data/annotation-guidelines',
              // },
              {
                label: 'EgoExo4D Challenge',
                to: '/challenge',
              },
              {
                label: 'Contact Us',
                to: '/contact',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EgoExo4D',
              },
              {
                label: 'EgoExo4D Main Site',
                href: 'http://ego-exo4d-data.org/'
              },
              {
                label: 'Ego4D (Related Dataset)',
                href: 'http://ego4d-data.org/'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EgoExo4D`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;