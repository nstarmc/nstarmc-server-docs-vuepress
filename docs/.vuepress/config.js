module.exports = {
    title: 'NSTARMC群服务器文档',
    description: '一个简单的文档',
    themeConfig: {
      sidebar: 'auto',
      logo: '/hero.png',
      nav: [
        { text: 'Doc', link: '/' },
        { text: 'NSTARMC', link: 'https://www.nstarmc.cn' },
      ],
      sidebar: [
        ["/","文档首页"],
        {
          title: '加入服务器指南',   // 必要的
          path: '/Play/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/'
          ]
        }
      ]
    }
  }