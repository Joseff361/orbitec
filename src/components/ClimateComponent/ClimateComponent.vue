<template>
  <section class="climate">
    <div class="climate__header">Today, 5 February</div>
    <div class="climate__body"><ChartComponent /></div>
    <div class="climate__footer">a</div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import ChartComponent from '@/components/ChartComponent';

export default Vue.extend({
  name: 'ClimateComponent',
  components: {
    ChartComponent,
  },
});
</script>

<style lang="scss" scoped>
@import './ClimateComponent.scss';
</style>
