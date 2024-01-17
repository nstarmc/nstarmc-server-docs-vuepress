<template>
    <div>
      <div class="card" v-for="card in cards" :key="card.title">
        <h2 class="card-title">{{ card.title }}</h2>
        <hr/>
        <p class="card-content" v-html="card.content"></p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        cards: []
      };
    },
    async created() {
      const response = await axios.get('https://nsc6.nstarmc.cn/upd-records/nsc6.txt');
      const text = response.data;
      const sections = text.split('#$').slice(1);
      this.cards = sections.map(section => {
        const [title, ...content] = section.split('*');
        return {
          title: title.trim(),
          content: content.join('*').replace(/\n/g, '<br/>').replace('*#', '').trim()
        };
      });
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .card-title {
    font-size: 20px;
    font-weight: bold;
  }
  
  .card-content {
    font-size: 16px;
  }
  </style>
  