<template>
  <div class="dashboard">
    <div class="dashboard__header"><HeaderComponent /></div>
    <div class="dashboard__body">
      <div class="dashboard__left">
        <div class="dashboard__left__temperature"><TemperatureComponent /></div>
        <div class="dashboard__left__info"><InfoComponent /></div>
      </div>
      <div class="dashboard__right">
        <ChartComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderComponent from '@/components/HeaderComponent';
import ChartComponent from '@/components/ChartComponent';
import InfoComponent from '@/components/InfoComponent';
import TemperatureComponent from '@/components/TemperatureComponent';

export default Vue.extend({
  name: 'DashboardPage',
  components: {
    HeaderComponent,
    ChartComponent,
    InfoComponent,
    TemperatureComponent,
  },
});
</script>

<style lang="scss" scoped>
@import './DashboardPage.scss';
</style>
