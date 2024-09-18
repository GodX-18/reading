<template>
  <div class="bookCard" @click="goUrl">
    <img :src="cover" alt="cover" />
    <div class="title" :style="{ color }">{{ title }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useData, useRouter, withBase } from "vitepress";
import { computed, toRef } from "vue";
import { ElMessage } from "element-plus";
const props = defineProps({
  title: {
    type: String,
  },
  cover: {
    type: String,
  },
  path: {
    type: String,
  },
});

const router = useRouter();
const isDark = toRef(useData(), "isDark");
let color = computed(() => (isDark.value ? "#fff" : "#5d646e"));

const goUrl = () => {
  if (props.path) {
    router.go(withBase(props.path));
  } else {
    ElMessage.info("待整理");
  }
};
</script>

<style lang="scss" scoped>
.bookCard {
  display: inline-block;
  width: 128px;
  overflow: hidden;
  margin-left: 36px;
  margin-bottom: 10px;
  cursor: pointer;
  img {
    box-shadow: 0 0 10px #ccc;
    width: 128px;
    height: 185px;
    transform: scale(0.9);
    &:hover {
      transform: scale(1);
      transition: all 0.3s;
    }
  }
  .title {
    margin-top: 14px;
    font-size: 15px;
    color: #5d646e;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    overflow: hidden;
    height: 40px;
  }
}
</style>
