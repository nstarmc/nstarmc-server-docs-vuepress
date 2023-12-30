<template>
  <div v-if="data">
    {{ data }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: null,
    };
  },
  async created() {
    const response = await axios.get('https://nsc6.nstarmc.cn/servers/zanzhu.txt');
    this.data = response.data;
  },
};
</script>
