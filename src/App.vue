<template>
  <div id="app">
    <DashboardPage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DashboardPage from '@/layouts/MainLayout';

export default Vue.extend({
  name: 'App',
  components: {
    DashboardPage,
  },
});
</script>
