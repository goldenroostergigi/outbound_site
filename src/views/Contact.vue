<!-- src/views/Contact.vue -->
<template>
  <div class="contact-container">
    <HeaderThree />
    <ContactContent class="contact-content" />
    <ScheduleServiceTwo />
  </div>
</template>

<script>
import HeaderThree from '../components/HeaderThree.vue';
import ContactContent from '../components/ContactContent.vue';
import ScheduleServiceTwo from '../components/ScheduleServiceTwo.vue';

export default {
  name: 'Contact',
  components: {
    HeaderThree,
    ContactContent,
    ScheduleServiceTwo,
  },
};
</script>

<style scoped>
.contact-container {
  background: linear-gradient(135deg, #f0f2f5, #ffffff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.contact-container .contact-content {
  margin-top: 3em;
  margin-bottom: 3em;
}
</style>
