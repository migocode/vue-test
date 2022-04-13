<template>
  <div>
    <h1>Chart</h1>
    <div v-bind:style="styleObject" id="chart-container"></div>
  </div>
</template>

<script>
import * as c3 from "c3";

export default {
  name: "ChartComponent",
  props: {
    data: Number,
    height: Number,
    width: Number,
  },
  data() {
    return {
      loadedData: {},
      styleObject: {
        height: this.height,
        width: this.width,
      },
    };
  },
  mounted() {
    var chart = c3.generate({
      bindto: "#chart-container",
      data: {
        columns: [['data', 1.5]],
        type: "gauge",
        onclick: function (d, i) {
          console.log("onclick", d, i);
        },
        onmouseover: function (d, i) {
          console.log("onmouseover", d, i);
        },
        onmouseout: function (d, i) {
          console.log("onmouseout", d, i);
        },
      },
      gauge: {
        label: {
          format: function (value) {
            return value;
          },
          show: false, // to turn off the min/max labels.
        },
        min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
        max: 100, // 100 is default
        units: " %",
        width: 39, // for adjusting arc thickness
      },
      color: {
        pattern: ["#FF0000", "#F97600", "#F6C600", "#60B044"], // the three color levels for the percentage values.
        threshold: {
          unit: "value", // percentage is default
          max: 200, // 100 is default
          values: [30, 60, 90, 100],
        },
      },
      size: {
        height: 200,
      },
    });    

    setTimeout(function () {
      chart.load({
      columns: [['data', 25]]
    });
    }, 1500);

    setTimeout(function () {
      chart.load({
      columns: [['data', 50]]
    });
    }, 3000);

    setTimeout(function () {
      chart.load({
      columns: [['data', 75]]
    });
    }, 4500);

    setTimeout(function () {
      chart.load({
      columns: [['data', 99.9]]
    });
    }, 6000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
