<!-- src/components/Statistics.vue -->
<template>
  <section class="stats-section">
    <div class="stats-container">
      <div class="stat-block" v-for="(stat, index) in stats" :key="index">
        <h2 class="stat-number">{{ stat.number }}</h2>
        <p class="stat-label">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Statistics',
  data() {
    return {
      stats: [
        { number: '500+', label: 'Mexican Residencies Facilitated' },
        { number: '100+', label: 'Tax Strategies Delivered' }, 
        { number: '100+', label: 'Real Estate Transactions' },
        { number: '20+', label: 'Years of Accumulated Experience' },
      ],
    };
  },
};
</script>

<style scoped>
/* Overall Layout Setup */
.stats-section {
  background-color: #1f1f1f; /* Dark background */
  color: #ffffff; /* Light text color for contrast */
  padding: 2rem 1rem;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four columns */
  gap: 1rem; /* Spacing between grid items */
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  margin-top: .2em;
}

/* Individual Stat Block Structure */
.stat-block {
  text-align: center;
  padding: 0.5rem;
}

.stat-number {
  font-size: 2rem; /* Reduced heading size */
  font-weight: bold;
  margin-bottom: 0.5rem; /* Spacing between number and label */
  transition: color 0.3s ease; /* Smooth transition for hover effect */
}

.stat-label {
  font-size: 1rem; /* Reduced subheading size */
  font-weight: normal;
  margin: 0;
}

/* Hover Effects */
.stat-block:hover .stat-number {
  color: #AF863A; /* Change color on hover */
}

/* Responsive Design Considerations */
@media (max-width: 768px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr); /* Two columns on smaller screens */
  }
  .stat-number {
    font-size: 1.5rem; /* Reduce font size */
  }
  .stat-label {
    font-size: 0.9rem; /* Adjust subheading size */
  }
}
</style>
