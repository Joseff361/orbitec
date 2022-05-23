<template>
  <div class="main">
    <DashboardPage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DashboardPage from '@/pages/DashboardPage';

export default Vue.extend({
  name: 'MainLayout',
  components: {
    DashboardPage,
  },
});
</script>

<style lang="scss">
@import './MainLayout.scss';
</style>
