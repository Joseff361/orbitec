<template>
  <header class="header">
    <div class="header__searcher">
      <span class="header__searcher__title">Weather</span>
      <span class="header__searcher__input">
        <input type="text" placeholder="Seach Your City" />
      </span>
    </div>
    <div class="header__banner">
      <div class="header__banner__left">
        <i class="fa-regular fa-sun"></i>
        <strong>21º</strong>
        <span>Mumbai, India</span>
      </div>
      <div class="header__banner__right">
        <span>Monday</span>
        <span>03:11 PM</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'HeaderComponent',
});
</script>

<style lang="scss">
@import './HeaderComponent.scss';
</style>
