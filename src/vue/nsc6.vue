<template>
    <div>
      <div v-for="card in cards" :key="card.title" class="card">
        <h2>{{ card.title }}</h2>
        <hr/>
        <p>{{ card.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        cards: [],
      };
    },
    async created() {
      const response = await axios.get('https://nsc.xiaoyulu.cn/upd-records/nsc6.txt');
      const rawCards = response.data.split('#$').slice(1);
      this.cards = rawCards.map((rawCard) => {
        const [title, content] = rawCard.split('*');
        return { title, content };
      });
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  