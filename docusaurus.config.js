// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const getTitle = () => {
  const locale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'zh-Hans';
  if (locale === 'en') {
    return 'TDengine IDMP Documentation | TDengine';
  }
  return 'TDengine IDMP 文档 | 涛思数据';
};


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: getTitle(),
  tagline: '工业互联网全量设备的元数据可视化管理系统',
  favicon: '/favicon.ico',

  url: 'https://idmpdocs.taosdata.com',
  baseUrl: '/',
  onBrokenAnchors: 'throw',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
        'en': {
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
          // editUrl:
          //   'https://github.com/taosdata/tdasset-docs/tree/main',
          // editLocalizedFiles: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  // themes: ['@docusaurus/theme-mermaid'],
  // // In order for Mermaid code blocks in Markdown to work,
  // // you also need to enable the Remark plugin with this option
  // markdown: {
  //   mermaid: true,
  // },
  
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
      docs: {
          sidebar: {
              hideable: true,
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
          // This would become <meta name="keywords" content="..."> in the generated HTML
          {
              name: "keywords",
              content: "TDengine IDMP, asset",
          },
          {
              name: "description",
              content: "TDengine Industrial Data Management Platform（TDengine IDMP）是一物联网、工业数据管理系统，它通过经典的树状结构组织传感器、设备采集的数据，实现数据的语境化、标准化、并提供实时分析、可视化、事件管理与报警等功能，旨在帮助企业从运营数据中挖掘出商业价值",
          },
          {
              name: "baidu-site-verification",
              content: "code-Fvrqff6sDg",
          },
      ],
      colorMode: {
          defaultMode: "light",
          disableSwitch: false,
          respectPrefersColorScheme: false, // not respect user's system preference
      },
      navbar: {
          hideOnScroll: true,
          title: "",
          logo: {
              alt: "",
              src: "/img/tdengine-idmp.svg",
          },
          items: [
              {
                label: "TSDB 文档",
                to: "/redirect?target=tsdb",
                position: "right",
                target: "_blank", // 新标签页打开
                rel: "noopener noreferrer", // 安全性
              },
              {
                label: "Cloud",
                to: "/redirect?target=cloud",
                position: "right",
                target: "_blank",
                rel: "noopener noreferrer", 
              },
              {
                label: "联系我们",
                to: "/redirect?target=contactus",
                position: "right",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              {
                  type: "search",
                  position: "right",
                  className: "navbarSearchTemp"
              },
              // {
              //   type: "docsVersionDropdown", // 固定类型，用于启用版本选择
              //   position: "right", // 下拉菜单位置（'left' 或 'right'，默认右对齐）
              //   label: "version", // 自定义下拉菜单标签（默认值为 'Version'）
              //   // dropdownActiveClassDisabled: true, // 可选：禁用下拉菜单项的激活状态
              // },
              // {
              //   type: 'localeDropdown',
              //   position: 'right',
              //   dropdownItemsAfter: [
              //     {
              //       to: 'https://idmpdocs.taosdata.com/',
              //       label: 'Help Us Translate',
              //     },  
              //   ],         
              // },


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
      zoom: {
        selector: '.markdown :not(em) > img, img[data-zoom]',
        background: { light: '#fff', dark: '#333' }
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
    [
        'docusaurus-plugin-image-zoom',
        {
            selector: '.theme-doc-markdown img, .markdown img, .theme-doc-content img',
            background: 'rgba(0,0,0,0.8)',
            zoomMargin: 32,
        },
    ],
  ],
  stylesheets: [
    "/fonts/css/ibm-plex.min.css"
  ],
  scripts: [
      { src: 'https://hm.baidu.com/hm.js?36af43fc308ee9444604d82ec053c128', async: true }
  ]
};
export default config;
