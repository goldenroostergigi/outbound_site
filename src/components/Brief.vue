<template>
  <div class="brief-card-wrapper">
    <div class="brief-card">
      <h2>Our Team</h2>
      <p>
        Future-focused and dedicated to excellence, Outbound Mexico is a boutique elite law firm that helps clients anticipate what is next and navigate a path to success.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brief',
};
</script>

<style scoped>
/* Wrapper for centering the card */
.brief-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 30vh;
}

/* Card styling */
.brief-card {
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  background-color: #fafafa;
  color: #1A1F25;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 0.3em;
  text-align: center;
  font-family: 'Marcellus', serif;
  border: 2px solid #fd471f;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.brief-card h2 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1em;
  color: #1A1F25;
}

.brief-card p {
  font-size: 1rem;
  color: #1A1F25;
}
</style>
