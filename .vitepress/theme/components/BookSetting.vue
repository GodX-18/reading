<template>
  <div class="bookSetting" @click="dialogVisible = true">A</div>
  <el-drawer
    v-model="dialogVisible"
    append-to-body
    align-center
    title="样式设置"
    size="350"
  >
    <span>字体大小</span>
    <el-slider
      style="margin-bottom: 30px"
      v-model="size"
      :min="14"
      :max="24"
      :marks="sizeMarks"
    />
    <span>行高</span>
    <el-slider
      style="margin-bottom: 30px"
      v-model="height"
      :min="1.4"
      :max="2"
      :step="0.1"
      :marks="heightMarks"
    />
    <span>字体</span>
    <div class="btns">
      <div
        class="btn"
        :class="{ active: activeFont === i.code }"
        v-for="i in fonts"
        @click="chooseFont(i.code)"
      >
        {{ i.label }}
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="confirm"> 确 认 </el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import {
  setFontSize,
  fontSize,
  setLineHeight,
  lineHeight,
  fontFamily,
  setFontFamily,
} from "../stores/common";

const dialogVisible = ref(false);
const size = ref(fontSize.value);
const height = ref(lineHeight.value);
const sizeMarks = {
  14: "14",
  16: "16",
  18: "18",
  20: "20",
  22: "22",
  24: "24",
};
const heightMarks = {
  1.4: "1.4",
  1.5: "1.5",
  1.6: "1.6",
  1.7: "1.7",
  1.8: "1.8",
  1.9: "1.9",
  2: "2",
};

const fonts = [
  {
    label: "系统字体",
    code: "",
  },
  {
    label: "快乐体",
    code: "ZCOOL KuaiLe",
  },
  {
    label: "Noto",
    code: "Noto Sans SC",
  },
  {
    label: "芒星体",
    code: "Zhi Mang Xing",
  },
  {
    label: "山政体",
    code: "Ma Shan Zheng",
  },
];

const activeFont = ref(fontFamily.value);
const chooseFont = (code: string) => {
  activeFont.value = code;
};
const confirm = () => {
  setFontSize(size.value);
  setLineHeight(height.value);
  setFontFamily(activeFont.value);
  const element = document.querySelector(".VPDoc");
  const paragraphs = document.querySelectorAll(".VPDoc p");

  // 设置字体大小
  if (element) {
    element.style.fontSize = fontSize.value + "px";
    // element.style.fontWeight = "bold";
    element.style.fontFamily = fontFamily.value;

    paragraphs.forEach((p) => {
      p.style.lineHeight = height.value;
    });
  }
  dialogVisible.value = false;
};

watch(dialogVisible, (val) => {
  if (!val) {
    size.value = fontSize.value;
    height.value = lineHeight.value;
    activeFont.value = fontFamily.value;
  }
});
onMounted(() => {
  confirm();
});
</script>

<style lang="scss" scoped>
.btns {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  .btn {
    width: 45%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .active {
    background-color: #57c3ee;
  }
}

.bookSetting {
  position: fixed;
  right: 18px;
  bottom: 18px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  line-height: 35px;
  background-color: #ccc;
  border-radius: 50%;
  font-size: 24px;
  text-align: center;
  font-weight: normal;
  .slider-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
}
</style>
