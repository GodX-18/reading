---
layout: home

hero:
  name: 书缘阁
  text: 精选好书推荐，点亮知识的光芒
  tagline: 探索心灵的灯塔，记录阅读的足迹
  image:
    src: /readLogo.png
    alt: 书缘阁
  actions:
    - theme: brand
      text: 开始
      link: /navigation
    # - theme: alt
    #   text: View on GitHub
    #   link: https://github.com/vuejs/vitepress

features:
  - icon: 
     src: /window.svg
    title: 智慧之窗
    details: 阅读是开启智慧之门的钥匙，它不仅带给我们知识，还能拓宽视野，提升理解力和创造力
  - icon:
      src: /heart.svg
    title: 心灵的滋养
    details: 阅读如同给心灵灌溉，它能带来内心的平静和满足，是精神食粮，让人在忙碌生活中找到片刻宁静
  - icon:
      src: /history.svg
    title: 时空旅者
    details: 书籍是时光机，它能带我们穿越古今，遨游世界，体验不同文化和历史，让我们的心灵踏上无尽的旅行
---

<script setup>
 import Home from '@theme/components/Home.vue'
</script>

<Home/>