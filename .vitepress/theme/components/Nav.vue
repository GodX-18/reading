<template>
  <div class="nav_page">
    <div class="nav">
      <el-menu
        mode="horizontal"
        default-active="个人成长"
        class="el-menu-vertical-demo"
        @select="handleSelect"
      >
        <el-menu-item :index="key" v-for="key in Object.keys(navData)">
          {{ key }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="books">
      <BookCard
        v-for="item in list"
        :title="item.title"
        :cover="item.cover"
        :path="item.path"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BookCard from "@theme/components/BookCard.vue";
import navData from "./nav.json";
const list = ref(navData["个人成长"]);
const handleSelect = (key: string) => {
  list.value = navData[key] || [];
};
</script>

<style lang="scss" scoped>
.nav_page {
  overflow: hidden;
  padding: 0 calc((100% - 1200px) / 2);
  .nav {
    margin-bottom: 20px;
  }
}
</style>
