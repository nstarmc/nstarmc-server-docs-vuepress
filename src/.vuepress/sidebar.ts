import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "🎮游玩指南",
      prefix: "play/",
      link: "play/",
      children: "structure",
    },
    {
      text: "❓常见问题",
      link: "qa/",
      prefix: "qa/",
      children: "structure",
    },
  ],
});
