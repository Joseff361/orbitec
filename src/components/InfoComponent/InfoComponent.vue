<template>
  <section class="info">
    <div class="info__header">
      <span> Monthly Rainfall </span>
      <span> This year </span>
    </div>
    <div class="info__footer">
      <strong>22mm</strong>
      <span>+2%</span>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'InfoComponent',
});
</script>

<style lang="scss" scoped>
@import './InfoComponent.scss';
</style>
