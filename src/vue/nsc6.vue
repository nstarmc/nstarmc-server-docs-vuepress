<template>
    <div class="timeline">
      <div class="event" v-for="card in cards" :key="card.title">
        <div class="content">
          <h2 class="card-title">{{ card.title }}</h2>
          <p class="card-content" v-html="card.content"></p>
        </div>
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
          content: content.join('*').replace(/\n/g, '<br/>').replace('*#', '').trim().replace(/^<br\/>|<br\/>$/g, '')
        };
      });
    }
  };
  </script>
  
  <style scoped>
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #6c757d;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
  
  .event {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }
  
  .event::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #6c757d;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  
  .event .content {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
  }
  
  @media screen and (max-width: 600px) {
    .timeline .event {
      width: 100%;
    }
  }
  </style>
  