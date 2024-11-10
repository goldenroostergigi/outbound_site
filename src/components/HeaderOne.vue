<!-- src/components/HeaderOne.vue -->
<template>
  <div class="header-one">
    <h1>About Us</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderOne',
};
</script>

<style scoped>
.header-one {
  /* Create a gradient background */
  background: linear-gradient(-45deg, #AF863A, #D4A85F, #AF863A, #8A6730);
  background-size: 400% 400%;

  /* Apply animation to the background */
  animation: gradientAnimation 15s ease infinite;

  color: #E8E8E8;
  height: 35vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

@keyframes gradientAnimation {
  /* Limit the movement range by adjusting the percentages */
  0%   { background-position: 25% 50%; }
  50%  { background-position: 75% 50%; }
  100% { background-position: 25% 50%; }
}

.header-one h1 {
  font-family: 'Marcellus', serif;
  margin: 0;
}

/* Center the text horizontally on mobile devices */
@media (max-width: 768px) {
  .header-one {
    justify-content: center;
    text-align: center;
  }
}
</style>


