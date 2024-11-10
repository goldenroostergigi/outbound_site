<template>
  <div class="header">
    <div class="div-1">
      <!-- Video Background -->
      <video autoplay muted loop playsinline class="background-video">
        <source src="https://videos.pexels.com/video-files/6943192/6943192-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <!-- Your Content -->
      <h1>Succeed in Mexico</h1>
    </div>
    <div class="div-2">
      <div class="card-container">
        <div class="top-card">
          <div
            v-for="(element, index) in elements"
            :key="index"
            :class="['card-element', { highlighted: index === activeIndex }]"
          >
            <div v-if="element.iconExists">
              <img :src="element.icon" alt="Icon" class="icon" />
            </div>
            <div v-else>
              <p class="icon-placeholder">Icon not available</p>
            </div>
            <h3>{{ element.title }}</h3>
          </div>
        </div>
        <div class="bottom-card">
          <transition name="fade" mode="out-in">
            <p :key="activeIndex">{{ elements[activeIndex].content }}</p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import exploreIcon from '../assets/home.svg';
import eatIcon from '../assets/coins.svg';
import relaxIcon from '../assets/suitcase.svg';

export default {
  name: 'Header',
  data() {
    return {
      activeIndex: 0,
      elements: [
        {
          title: 'Real Estate',
          icon: exploreIcon,
          iconExists: !!exploreIcon,
          content: 'Personalized guidance and advice on various real estate investment opportunities.',
        },
        {
          title: 'Taxes',
          icon: eatIcon,
          iconExists: !!eatIcon,
          content: 'Reliable solutions for individuals, entrepreneurs, and companies dealing with the Mexican tax system.',
        },
        {
          title: 'Immigration',
          icon: relaxIcon,
          iconExists: !!relaxIcon,
          content: 'We handle documentation, visas, housing, and integration into Mexico',
        },
      ],
    };
  },
  mounted() {
    this.startRotation();
  },
  methods: {
    startRotation() {
      setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.elements.length;
      }, 6000);
    },
  },
};
</script>


<style scoped>
:root {
  --primary-color: #FF5722;
  --secondary-color: #FFC107;
  --text-color: #333;
  --background-color: #fff;
  --spacing: 24px; /* Increased spacing */
  --card-padding: 20px; /* New variable for card padding */
  --icon-size: 60px; /* Increased icon size */
}

.header {
  display: flex;
  flex-direction: row;
  height: 75vh;
  color: var(--text-color);
  padding: var(--spacing); /* Added padding to the header */
}

.div-1 {
  position: relative;
  font-family: 'Marcellus', serif;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  padding: 0 var(--spacing);
  width: 50%;
  padding-left: 2.5em;
  padding-right: 1em;
  color: #f9f9f9;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1; /* Add a higher z-index for this container */
  box-sizing: border-box;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}


.div-1 h1 {
  margin: 0;
  padding-bottom: 1.5em;
  color: #ECECEC;
}

.div-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: var(--spacing); /* Added padding */
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing); /* Maintained gap */
  width: 100%; /* Ensure full width for better spacing */
}

.top-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%; /* Changed to 100% for better spacing */
  padding: var(--card-padding); /* Increased padding */
  background-color: var(--background-color);
  border-radius: 12px; /* Increased border radius */
  flex-wrap: wrap; /* Allow wrapping */
  margin-bottom: var(--spacing); /* Added margin below top-card */
}

.card-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5; /* Slightly increased opacity */
  transition: opacity 0.3s, transform 0.3s;
  flex: 1 1 20%; /* Flexible basis */
  margin: var(--spacing) 0; /* Increased vertical margin */
  max-width: 180px; /* Increased max-width */
  padding: var(--spacing); /* Added padding inside card elements */
  background-color: #f9f9f9; /* Added background for card elements */
  border-radius: 8px; /* Rounded corners */
}

.card-element.highlighted {
  opacity: 1;
  transform: scale(1.05); /* Slightly enlarge highlighted card */
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--icon-size); /* Increased height */
  width: var(--icon-size); /* Added width for consistency */
  margin-bottom: 12px; /* Increased margin below icons */
}

.card-element .icon {
  width: 100%; /* Make icon take full container size */
  height: 100%; /* Make icon take full container size */
  object-fit: contain; /* Ensure icons fit well */
}

.card-element .icon-placeholder {
  font-size: 0.9em; /* Increased font size */
  color: var(--primary-color);
  text-align: center;
}

.card-element h3 {
  text-align: center;
  margin: 0;
  word-break: break-word; /* Allow text to wrap */
  font-size: 1.1em; /* Increased font size */
  color: var(--text-color);
  padding-top: 8px; /* Added padding above title */
  font-weight: 400;
}

.bottom-card {
  margin-top: var(--spacing);
  padding: var(--card-padding); /* Increased padding */
  background-color: var(--background-color);
  width: 27em;
  height: 8em;
  border-radius: 12px; /* Increased border radius */
  text-align: center;
  min-height: 80px; /* Increased min-height */
  position: relative;
  padding-top: 2em;
  box-sizing: border-box;
}

.bottom-card p {
  margin: 0;
  position: relative; /* No more overlap, smooth transition */
  width: 100%;
  left: 0;
  top: 0;
  font-size: 1em; /* Consistent font size */
  line-height: 1.5; /* Improved readability */
  font-size: 1.1em;
  font-weight: 400;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .top-card {
    width: 100%;
  }

  .card-element {
    flex: 1 1 45%;
    max-width: 160px;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    height: auto;
    padding: var(--spacing);
  }

  .div-1,
  .div-2 {
    width: 100%;
    height: 60vh;
    padding-left: 0;
    padding: var(--spacing);
  }

  .div-1 {
    font-size: 2em; /* Adjusted font size for better readability */
    justify-content: center;
    text-align: center;
    font-size: 1.1em;
    padding-left: 1em;
    padding-right: 1em;
  }

  .top-card,
  .bottom-card {
    width: 100%; /* Ensure full width */
    padding: var(--spacing);
  }

  .top-card {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card-element {
    flex: 1 1 45%;
    max-width: 140px;
    padding: var(--spacing); /* Consistent padding */
  }

  .bottom-card {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .card-element {
    flex: 1 1 15%;
    max-width: 100%;
    padding: var(--spacing); /* Ensure padding on small screens */
  }

  .bottom-card {
    padding-top: 2em;
    padding-left: 1em;
    padding-right: 1em;
  }

  .icon-container {
    height: 50px; /* Adjust icon size for smaller screens */
    width: 50px;
  }

  .card-element h3 {
    font-size: 1em; /* Adjust font size */
  }
}
</style>


