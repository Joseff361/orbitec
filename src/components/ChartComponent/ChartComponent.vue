<template>
  <canvas id="climate-chart"></canvas>
</template>

<script>
import Vue from 'vue';
import Chart from 'chart.js/auto';
import climateData from './ClimateData';
/*
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  Chart.register(ChartDataLabels);
*/

export default Vue.extend({
  name: 'ChartComponent',
  mounted() {
    const chart = document.getElementById('climate-chart').getContext('2d');

    const gradientBg = chart.createLinearGradient(0, 0, 100, 400);

    gradientBg.addColorStop(0, '#fdaa39');
    gradientBg.addColorStop(0.5, '#fade88');

    new Chart(chart, climateData(gradientBg));
  },
});
</script>

<style lang="scss" scoped>
@import './ChartComponent.scss';
</style>
