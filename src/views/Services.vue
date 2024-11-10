<template>
  <div class="services-page">
    <HeaderTwo />
    <ServicesListing />
    <ScheduleServiceTwo />
  </div>
</template>

<script setup>
import HeaderTwo from '../components/HeaderTwo.vue';
import ServicesListing from '../components/ServicesListing.vue';
import ScheduleServiceTwo from '../components/ScheduleServiceTwo.vue';
</script>

<style scoped>
.services-page {
  background-color: #f8f9fa;
  min-height: 100vh;
}
</style>