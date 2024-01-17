<template>
    <div>
      <div v-for="card in cards" :key="card.title">
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
          content: content.join('*').trim()
        };
      });
    }
  };
  </script>
  