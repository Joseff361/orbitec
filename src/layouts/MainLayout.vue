<template>
  <DashboardPage />
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
