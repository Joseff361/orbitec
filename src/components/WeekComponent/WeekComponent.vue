<template>
  <footer class="week">
    <div class="week__day">
      <span>MON</span>
      <i class="fa-solid fa-sun"></i>
      <span>19º</span>
    </div>
    <span class="week__line"></span>
    <div class="week__day">
      <span>TUE</span>
      <i class="fa-solid fa-cloud"></i>
      <span>18º</span>
    </div>
    <span class="week__line"></span>
    <div class="week__day">
      <span>WED</span>
      <i class="fa-solid fa-wind"></i>
      <span>19º</span>
    </div>
    <span class="week__line"></span>
    <div class="week__day">
      <span>THU</span>
      <i class="fa-solid fa-cloud-sun"></i>
      <span>21º</span>
    </div>
    <span class="week__line"></span>
    <div class="week__day">
      <span>FRI</span>
      <i class="fa-solid fa-wind"></i>
      <span>22º</span>
    </div>
    <span class="week__line"></span>
    <div class="week__day">
      <span>SAT</span>
      <i class="fa-solid fa-sun"></i>
      <span>23º</span>
    </div>
    <span class="week__line"></span>
    <div class="week__day">
      <span>SUN</span>
      <i class="fa-solid fa-cloud-sun"></i>
      <span>22º</span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'WeekComponent',
});
</script>

<style lang="scss" scoped>
@import './WeekComponent.scss';
</style>
