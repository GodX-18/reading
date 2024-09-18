// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus)
    if (!(import.meta as any).env.SSR) {
      // particles
      const Particles = await import('@tsparticles/vue3')
      const { loadFull } = await import('tsparticles')
      app.use(Particles.default,{
        init: async engine => {
          await loadFull(engine); 
        }
      })
    }
  }
} satisfies Theme
