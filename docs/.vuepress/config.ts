import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'NSTARMC群服务器文档',
  description: '一份简单的文档~',
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: '文档首页',
        link: '/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/',
        ],
      },
      // 字符串 - 页面文件路径
      '/Play/',
    ],
  }),
})
