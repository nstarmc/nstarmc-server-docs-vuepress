# 感谢赞助
<template>
  <div v-html="content"></div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    axios
      .get("https://nsc6.nstarmc.cn/servers/zanzhu.txt")
      .then((response) => {
        this.content = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
