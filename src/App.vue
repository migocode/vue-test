<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ChartComponent :data="loadedData" :width="600" :height="600"/>
</template>

<script>
import ChartComponent from './components/Chart.vue';
import * as d3 from 'd3';

export default {
  name: 'App',
  components: {
    ChartComponent
  },
  data() {
    return {
      loadedData: {}
    }
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loadedData = await d3.json("./tweets.json");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
