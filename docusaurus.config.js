// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TDasset 文档 | 涛思数据',
  tagline: '工业互联网全量设备的元数据可视化管理系统',
  favicon: 'img/tdengine.ico',

  url: 'https://docs.tdasset.ai',
  baseUrl: '/',
  onBrokenAnchors: 'warn',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    // locales: ['en-US', 'zh-Hans'],
    locales: ['zh-Hans'],
    localeConfigs: {
        'en-US': {
            label: 'English',
        },
        'zh-Hans': {
            label: '简体中文',
        },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/taosdata/tdasset-docs/tree/main',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      docs: {
          sidebar: {
              hideable: false,
              autoCollapseCategories: true,
          }
      },
      algolia: {
          appId: "FP08SIOFZ3",
          apiKey: "89d4d983122a141b426e52fdca50e3a0",
          indexName: "tdasset_index",
          searchPagePath: false
      },
      metadata: [
          // This would become <meta name="keywords" content="TDengine, IoT"> in the generated HTML
          {
              name: "keywords",
              content: "TDengine, IoT, SQL, 分布式, 集群, 时序数据库",
          },
          {
              name: "description",
              content:
                  "TDengine 是一款高性能、分布式、支持 SQL 的时序数据库，其核心代码包括集群功能全部开源，同时 TDengine 还带有内建的缓存、流式计算、数据订阅等系统功能， 能大幅减少研发和运维的复杂度， 可广泛应用于物联网、车联网、工业互联网、IT 运维、金融等领域。",
          },
          {
              name: "baidu-site-verification",
              content: "code-Fvrqff6sDg",
          },
      ],
      colorMode: {
          defaultMode: "light",
          disableSwitch: false,
          respectPrefersColorScheme: true,
      },
      navbar: {
          hideOnScroll: true,
          title: "涛思数据",
          logo: {
              alt: "",
              src: "/img/logo.jpg",
              href: "https://www.taosdata.com",
          },
          items: [
              // {
              //   type: "docSidebar",
              //   sidebarId: "tutorialSidebar",
              //   position: "left",
              //   label: "教程",
              // },
              {
                to: "https://www.taosdata.com/blog",
                label: "博客",
                position: "right",
              },              
              {
                type: 'localeDropdown',
                position: 'right',
                dropdownItemsAfter: [
                  {
                    to: 'https://docs.taosdata.com/',
                    label: 'Help Us Translate',
                  },  
                ],         
              },
              {
                href: "https://github.com/taosdata/TDasset",
                label: "GitHub",
                position: "right",
              },
              // {
              //   type: "docsVersionDropdown", // 固定类型，用于启用版本选择
              //   position: "right", // 下拉菜单位置（'left' 或 'right'，默认右对齐）
              //   label: "version", // 自定义下拉菜单标签（默认值为 'Version'）
              //   // dropdownActiveClassDisabled: true, // 可选：禁用下拉菜单项的激活状态
              // },
              {
                  to: "https://www.taosdata.com/contactus",
                  label: "联系我们",
                  position: "right",
              },
              {
                  type: "search",
                  position: "right",
                  className: "navbarSearchTemp"
              },
          ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/tdengine",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/taosdata/TDasset",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © 2017-${new Date().getFullYear()} 涛思数据`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
  }),
  plugins: [
    [
        '@docusaurus/plugin-google-gtag',
        {
            trackingID: 'G-7TPB043Y9M',
            anonymizeIP: true,
        },
    ],
  ],
};
export default config;
