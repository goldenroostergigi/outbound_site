<template>
  <div>
    <HeaderOne />
    <Brief />
    <MembersPresentation />
    <Partners />
    <ScheduleServiceTwo />
  </div>
</template>

<script>
import HeaderOne from '../components/HeaderOne.vue';
import Brief from '../components/Brief.vue';
import MembersPresentation from '../components/MembersPresentation.vue';
import Partners from '../components/Partners.vue';
import ScheduleServiceTwo from '../components/ScheduleServiceTwo.vue';

export default {
  name: 'AboutUs',
  components: {
    HeaderOne,
    Brief,
    MembersPresentation,
    Partners,
    ScheduleServiceTwo,
  },
};
</script>
