import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "NSTARMC群服务器帮助文档",
  description: "Docs",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
