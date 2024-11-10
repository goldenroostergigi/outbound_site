<!-- src/views/Home.vue -->
<template>
  <div>
    <!-- Import and use the Header component -->
    <Header />

    <!-- Add the new components in order -->
    <Stadistics />
    <MexPitch />
    <MapShow /> <!-- New MapShow component added here -->
    <ScheduleService />
  </div>
</template>

<script>
import Header from '../components/Header.vue'; // Import the Header component
import Stadistics from '../components/Stadistics.vue'; // Import Stadistics component
import MexPitch from '../components/MexPitch.vue'; // Import MexPitch component
import ScheduleService from '../components/ScheduleService.vue'; // Import ScheduleService component
import MapShow from '../components/MapShow.vue'; // Import the new MapShow component

export default {
  name: 'Home',
  components: {
    Header, // Register Header component
    Stadistics, // Register Stadistics component
    MexPitch, // Register MexPitch component
    MapShow, // Register MapShow component
    ScheduleService, // Register ScheduleService component
  },
};
</script>

<style>

</style>
