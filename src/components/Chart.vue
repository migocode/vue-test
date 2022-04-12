<template>
  <div class="chart">
    <h1>{{ msg }}</h1>
    <svg id="chart-svg" :height="height" :width="width"></svg>
  </div>
</template>

<script>
import * as c3 from 'c3';

export default {
  name: 'ChartComponent',
  props: {
    data: Object,
    height: Number,
    width: Number,
  },
  data() {
    return {
      loadedData: {}
    }
  },
  mounted() {
    console.log("App loaded");
    this.loadedData = this.data;
  },
  created() {
    var chart = c3.generate({
      
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
