import { ref } from "vue";
import config from "../config";
const { fontSize: defaultFontSize, lineHeight: defaultLineHeight, fontFamily: defaultFontFamily } = config;

// 字体大小
const fontSize = ref<number>(defaultFontSize);
const setFontSize = (val: number) => {
  fontSize.value = val;
};

// 行高
const lineHeight = ref<number>(defaultLineHeight);
const setLineHeight = (val: number) => {
  lineHeight.value = val;
};

// 字体
const fontFamily = ref<string>(defaultFontFamily);
const setFontFamily = (val: string) => {
  fontFamily.value = val;
};
export { setFontSize, fontSize, setLineHeight, lineHeight, fontFamily, setFontFamily };
