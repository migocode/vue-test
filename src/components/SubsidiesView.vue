<template>
  <div class="chart">
    <h1>Zuschussverträge</h1>
    <ChartComponent :height="500" :width="500"></ChartComponent>
  </div>
</template>

<script>
import ChartComponent from './ChartComponent.vue'

export default {
  name: 'SubsidiesView',
  components: {
    ChartComponent
  },
  props: {
    title: String
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
