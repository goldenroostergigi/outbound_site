<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar />
    <ViewsContainer />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ViewsContainer from './components/ViewsContainer.vue';

export default {
  components: {
    Navbar,
    Footer,
    ViewsContainer,
  },
};
</script>

<style>
/* Import Lato font */
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Marcellus');

body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  color: #1a1f25;
  background-color: #d4dadc;
}
</style>
