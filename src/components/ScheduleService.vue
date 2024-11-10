<!-- src/components/ScheduleService.vue -->
<template>
  <div class="schedule-service-wrapper">
    <div class="schedule-service">
      <h2 class="message">Book a Call with Us!</h2>
      <button
        class="schedule-button"
        @click="redirectToCalendly"
        aria-label="Schedule a call"
      >
        Schedule Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleService',
  methods: {
    redirectToCalendly() {
      // Replace with your actual Calendly scheduling link
      window.open('https://calendly.com/outboundmx/consulting-call-for-clients', '_blank');
    },
  },
};
</script>

<style scoped>
/* Import the 'Marcellus' font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');

/* Wrapper for the overall background */
.schedule-service-wrapper {
  background-color: #d4dadc; /* Desired outer background color */
  padding: 2rem; /* Adjust padding as needed */
  min-height: 40vh; /* Ensure it covers the full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Card styling */
.schedule-service {
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  background-color: #fafafa; /* Changed to white for the card background */
  color: #1A1F25; /* Adjust text color to contrast with white background */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 0.3em;
  text-align: center;
  font-family: 'Marcellus', serif;
  border: 2px solid #fd471f;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.message {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5em;
  color: #1A1F25; /* Adjust text color to match the new card background */
}

.schedule-button {
  padding: 0.5em 1em;
  font-size: 1.1rem;
  color: #ffffff; /* Updated to white text for better contrast on red background */
  background-color: #fd471f;
  border: 2px solid #fd471f;
  border-radius: 0.3em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.schedule-button:hover {
  background-color: #E8E8E8;
  color: #1A1F25;
  box-shadow: 0 8px 15px rgba(253, 71, 31, 0.4);
  transform: scale(1.05);
}

.schedule-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(253, 71, 31, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {
  .schedule-service-wrapper {
    padding: 1.5rem;
  }

  .schedule-service {
    padding: 1.5rem;
  }

  .message {
    font-size: 1.3rem;
  }

  .schedule-button {
    padding: 0.5em 1em;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .schedule-service-wrapper {
    padding: 1rem;
  }

  .schedule-service {
    padding: 1rem;
  }

  .message {
    font-size: 1.1rem;
  }

  .schedule-button {
    padding: 0.5em 1em;
    font-size: 0.9rem;
  }
}
</style>

