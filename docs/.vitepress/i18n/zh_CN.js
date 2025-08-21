const sidebar_guide_henkaku = {
  text: '指南',
  items: [
    { text: '开始', link: '/get-started' },
    { text: '升级到5.05', link: '/updating-firmware-(5.05)' },
    { text: '升级到(9.0)', link: '/updating-firmware-(9.0)' }
    { text: '使用webkit(5.05)', link: '/using-webkit505' },
    { text: '使用webkit(9.0)', link: '/using-webkit90' }
    { text: '使用PPPwn', link: '/using-pppwn' }
    { text: '使用BD-JB', link: '/bdjb' }
  ],
}

const sidebar_guide_henlo = {
  text: '指南',
  items: [
    { text: '开始', link: '/get-started' },
    { text: '升级到5.05', link: '/updating-firmware-(5.05)' },
    { text: '升级到(9.0)', link: '/updating-firmware-(9.0)' }
    { text: '使用webkit(5.05)', link: '/using-webkit505' },
    { text: '使用webkit(9.0)', link: '/using-webkit90' }
    { text: '使用PPPwn', link: '/using-pppwn' }
    { text: '使用BD-JB', link: '/bdjb' }
  ],
}

const themeConfig = {
  search: '搜索',
  selectLanguageName: "中文",

  backToHome: "主页",
  contributorsText: "制作名单",
  editLinkText: "编辑这篇文字",
  lastUpdatedText: "最新上传",
  openInNewWindow: "新开标签页",
  selectLanguageAriaLabel: "选择语言",
  toggleDarkMode: "黑暗模式",
  toggleSidebar: "切换提要栏",
  discordNoticeText: "如果需要帮助 可以加入QQ群:",

  nav: [
    {
      text: '指南',
      items: [
        { text: '使用BD-JB', link: '/bdjb' },
        {
          text: '使用PPPwn',
          link: '/using-pppwn'
        },
          {
          text: 'webkit(9.0)',
          link: '/using-webkit90'
        },
      ]
    },
    {
      text: '帮助',
      items: [
        { text: 'FAQ', link: '/faq' }
      ]
    },
    {
      text: '网站',
      items: [
        { text: '捐赠', link: '/donations' },
        { text: '制作名单', link: '/credits' },
        { text: '网站导航', link: '/site-navigation' }
      ]
    },
  ],
    
  sidebar: {
    '/bdjb': [
      sidebar_guide_henkaku
    ],
    '/using-webkit90': [
      sidebar_guide_henkaku
    ],
    '/using-pppwn': [
      sidebar_guide_henkaku
    ],
    '/': [
      sidebar_guide_henlo
    ],
  },
};

export default {
  lang: 'zh-CN',
  label: "中文",
  title: 'PS4 Hacks Guide',
  description: '一个能让你成功在PS4上加载GoldHen的教程',
  themeConfig: themeConfig
}
