<template>
  <section class="climate">
    <div class="climate__header">Today, 5 February</div>
    <div class="climate__body"><ChartComponent /></div>
    <div class="climate__footer"><WeekComponent /></div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import ChartComponent from '@/components/ChartComponent';
import WeekComponent from '@/components/WeekComponent';

export default Vue.extend({
  name: 'ClimateComponent',
  components: {
    ChartComponent,
    WeekComponent,
  },
});
</script>

<style lang="scss" scoped>
@import './ClimateComponent.scss';
</style>
