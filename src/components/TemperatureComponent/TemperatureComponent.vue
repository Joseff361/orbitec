<template>
  <section class="temperature">
    <div class="temperature__column">
      <div class="temperature__section">
        <img src="@/assets/humidity.png" alt="humidity" />
        <div class="temperature__section__info">
          <span>Humidity</span>
          <strong>56%</strong>
        </div>
      </div>
      <div class="temperature__section">
        <img src="@/assets/wind.png" alt="humidity" />
        <div class="temperature__section__info">
          <span>Air Quality</span>
          <strong>151</strong>
        </div>
      </div>
    </div>
    <div class="temperature__column">
      <div class="temperature__section">
        <img src="@/assets/sunrise.png" alt="humidity" />
        <div class="temperature__section__info">
          <span>Sunrise</span>
          <strong>6:45 AM</strong>
        </div>
      </div>
      <div class="temperature__section">
        <img src="@/assets/sunset.png" alt="humidity" />
        <div class="temperature__section__info">
          <span>Sunset</span>
          <strong>6:15 PM</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TemperatureComponent',
});
</script>

<style lang="scss" scoped>
@import './TemperatureComponent.scss';
</style>
