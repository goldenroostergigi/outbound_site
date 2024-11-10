<template>
  <div class="pitch-container">
    <!-- Div 2: Text Paragraphs -->
    <div class="div-2">
      <div class="text-card">
        <!-- Navigation Dots -->
        <div class="navigation-dots">
          <div
            v-for="(item, index) in contentPairs"
            :key="'dot-' + index"
            class="dot"
            :class="{ active: activeIndex === index }"
            @click="goToSlide(index)"
          ></div>
        </div>
        <!-- Text Content -->
        <transition name="fade" mode="out-in">
          <p :key="activeIndex">{{ contentPairs[activeIndex].text }}</p>
        </transition>
      </div>
    </div>
    <!-- Div 1: Video Carousel -->
    <div class="div-1">
      <transition name="slide" mode="out-in">
        <video
          :key="'video-' + activeIndex"
          autoplay
          muted
          loop
          playsinline
          class="background-video"
        >
          <source
            :src="contentPairs[activeIndex].video"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </transition>
    </div>
  </div>
</template>


<script>
export default {
  name: 'PitchMex',
  data() {
    return {
      activeIndex: 0,
      intervalId: null,
      contentPairs: [
        {
          text: 'Affordable high quality of life for Digital Nomads and Retirees.',
          video: 'https://videos.pexels.com/video-files/3205401/3205401-hd_1920_1080_25fps.mp4',
        },
        {
          text: 'Mexico’s favorable investment climate includes strategic trade agreements, cost-efficient labor, and a broad market across sectors like real estate, energy, and tech.',
          video: 'https://videos.pexels.com/video-files/1197802/1197802-hd_1920_1080_25fps.mp4',
        },
        {
          text: 'Positioned as a top destination in Latin America, Mexico offers unique growth opportunities in a stable and globalizing economy.',
          video: 'https://videos.pexels.com/video-files/6312307/6312307-uhd_2560_1440_30fps.mp4',
        },
        {
          text: 'Proximity to the U.S. and robust trade networks give businesses seamless access to North and Latin American markets.',
          video: 'https://videos.pexels.com/video-files/853878/853878-hd_1920_1080_25fps.mp4',
        },
      ],
    };
  },
  mounted() {
    this.startRotation();
  },
  methods: {
    startRotation() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 8000); // Changes every 8 seconds
    },
    nextSlide() {
      this.activeIndex =
        (this.activeIndex + 1) % this.contentPairs.length;
    },
    goToSlide(index) {
      this.activeIndex = index;
      // Reset the interval to prevent immediate slide change after manual selection
      clearInterval(this.intervalId);
      this.startRotation();
    },
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>


<style scoped>
.pitch-container {
  display: flex;
  flex-direction: row;
  height: 75vh;
  color: #333;
}

.div-2 {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2B3340;
}

.text-card {
  background-color: #2B3340;
  padding: 20px;
  border-radius: 12px;
  width: 80%;
  text-align: center;
  position: relative;
  color: #fafafa;
}

.text-card p {
  font-size: 1.2em;
  line-height: 1.5;
  margin: 0;
}

/* Navigation Dots Styles */
.navigation-dots {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.dot {
  width: 12px;
  height: 12px;
  border: 2px solid #fafafa;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #fafafa;
}

/* Rest of your styles remain the same */

.div-1 {
  position: relative;
  width: 50%;
  overflow: hidden;
  background-color: #2B3340;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Transition Styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s forwards;
}

.slide-leave-active {
  animation: slide-out 0.5s forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .pitch-container {
    flex-direction: column;
    height: auto;
  }

  .div-2,
  .div-1 {
    width: 100%;
    height: auto;
  }

  .div-2 {
    height: 60vh;
  }

  .background-video {
    position: relative;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .text-card {
    width: 90%;
  }
}
</style>

