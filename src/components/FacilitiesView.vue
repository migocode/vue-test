<template>
  <div class="chart">
    <h1>Gewerke</h1>
    <ChartComponent :height="200" :width="200"></ChartComponent>
  </div>
</template>

<script>
import ChartComponent from './ChartComponent.vue'

export default {
  name: 'FacilitiesView',
  components: {
    ChartComponent
  },
  data() {
    return {
      loadedData: {}
    }
  },
  mounted() {
    this.loadedData = this.data;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
