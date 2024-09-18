<template>
  <Waline :serverURL="serverURL" :path="route.path" :dark="isDark" :copyright="false" />
</template>
<script setup>
import "@waline/client/waline.css";
import { Waline } from "@waline/client/component";
import { toRef } from "vue";
import { useData, useRoute } from "vitepress";

const serverURL = "https://test-eta-ten-99.vercel.app/";
const isDark = toRef(useData(), "isDark");
const route = useRoute();
</script>
