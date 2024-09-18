<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import Waline from "./components/Waline.vue";
import BookSetting from "./components/BookSetting.vue";
import ImagePreview from "./components/ImagePreview.vue";

const { Layout } = DefaultTheme;
const { frontmatter } = useData(); // 这里的frontmatter就是各个md文件中自己写在最上面的东西
</script>

<template>
  <Layout>
    <template #doc-before>
      <span class="page-info-title">{{ frontmatter.title }}</span
      ><br /><br />
      <!-- <span class="page-info">✍️{{ frontmatter.author }}</span>
      <span class="page-info">🕐{{ frontmatter.date }}</span> -->
      <ImagePreview />
    </template>
    <template #doc-after>
      <Waline />
    </template>
    <template #doc-bottom>
      <BookSetting />
    </template>
  </Layout>
</template>

<style>
.page-info-title {
  font-size: 28px;
  font-weight: 600;
}
.page-info {
  font-size: 0.4cm;
  color: #7f7f7f;
  margin-right: 10px;
}
</style>
