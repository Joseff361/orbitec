<template>
  <div class="dashboard">
    <div class="dashboard__header"><HeaderComponent /></div>
    <div class="dashboard__body">
      <div class="dashboard__left">
        <div class="dashboard__left__temperature"><TemperatureComponent /></div>
        <div class="dashboard__left__info"><InfoComponent /></div>
      </div>
      <div class="dashboard__right">
        <ClimateComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderComponent from '@/components/HeaderComponent';
import ClimateComponent from '@/components/ClimateComponent';
import InfoComponent from '@/components/InfoComponent';
import TemperatureComponent from '@/components/TemperatureComponent';

export default Vue.extend({
  name: 'DashboardPage',
  components: {
    HeaderComponent,
    ClimateComponent,
    InfoComponent,
    TemperatureComponent,
  },
});
</script>

<style lang="scss" scoped>
@import './DashboardPage.scss';
</style>
