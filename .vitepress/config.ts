import { defineConfig } from "vitepress";
import sidebar from "./sidebar";
import nav from "./navbar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "书缘阁",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    // Noto Sans SC
    // Zhi Mang Xing
    // ZCOOL KuaiLe
    // Ma Shan Zheng
    ["link", { href: "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Sans+SC:wght@100..900&family=ZCOOL+KuaiLe&family=Zhi+Mang+Xing&display=swap", rel: "stylesheet" }]
  ],
  lang: "zh-CN",
  base: "/reading/",
  description: "精选好书推荐，点亮知识的光芒",
  srcDir: "src",
  lastUpdated: true,
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },
  sitemap: {
    hostname: "https://www.godx.site/reading"
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "heart.svg",
    search: {
      provider: "algolia",
      options: {
        appId: "OOASJG5EK3",
        apiKey: "82964ed285ab801738cbb75a76b6cbc0",
        indexName: "crawler_reading",
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消"
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除"
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接"
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者"
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈"
            }
          }
        }
      }
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    outline: {
      label: "页面导航",
      level: [2, 3]
    },
    nav,
    sidebar,

    // socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }]
  },
  vite: {
    server: {
      host: "0.0.0.0",
      port: 8888
    }
  }
});
