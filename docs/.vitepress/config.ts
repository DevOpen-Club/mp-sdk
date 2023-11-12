import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Fanbook 小程序 SDK',
  description: 'Fanbook 小程序 JavaScript SDK',
  head: [
    ['link', { rel: 'icon', href: '/icon/fanbook.svg' }],
  ],
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/quick-starter.html' },
      { text: '关于', link: '/about.html' },
    ],
    sidebar: [{
      text: '入门',
      items: [
        { text: '快速开始', link: '/quick-starter.html' },
        { text: 'API 文档', link: '/api/' },
        { text: '示例', link: '/examples.html' },
      ],
    }, {
      text: '其他',
      items: [
        { text: '历史版本', link: '/versions.html' },
        { text: '贡献', link: '/contributing.html' },
      ],
    }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DevOpen-Club/mp-sdk' },
      {
        icon: { svg: '<img src="/icon/fanbook.svg" alt="Fanbook" width="24" />' },
        link: 'https://fanbook.mobi/rjCNRFUN',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present DevOpen Club',
    },
    editLink: {
      pattern: 'https://github.com/DevOpen-Club/mp-sdk/edit/main/docs/:path',
      text: '修改本页',
    },
    lastUpdated: {
      formatOptions: {
        timeZone: 'Asia/Shanghai',
      },
      text: '上次更新时间',
    },
    search: {
      provider: 'local',
    },
  },
});
