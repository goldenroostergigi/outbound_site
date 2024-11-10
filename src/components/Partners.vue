<template>
  <div class="partners-section">
    <h2 class="partners-title">Our Partners</h2>
    <div class="partners-container">
      <div class="partner-logo" v-for="(partner, index) in partners" :key="index">
        <img :src="partner.src" :alt="partner.name" />
      </div>
    </div>
  </div>
</template>

<script>
import KeptonLogo from '../assets/partners/Newlin.png';
import MitsubishiLogo from '../assets/partners/latin_life.webp';
import NissanLogo from '../assets/partners/Kempton.png';
import ToyotaLogo from '../assets/partners/santos.png';

export default {
  name: 'Partners',
  data() {
    return {
      partners: [
        { name: 'Honda', src: KeptonLogo },
        { name: 'Mitsubishi', src: MitsubishiLogo },
        { name: 'Nissan', src: NissanLogo },
        { name: 'Toyota', src: ToyotaLogo },
      ],
    };
  },
};
</script>

<style scoped>
.partners-section {
  text-align: center;
  padding: 40px 20px;
}

.partners-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: 'Marcellus', serif;
}

.partners-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  align-items: center;
  justify-items: center;
}

.partner-logo {
  transition: transform 0.3s, box-shadow 0.3s;
}


.partner-logo img {
  width: 9em;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.partner-logo:hover img {
  filter: grayscale(0%);
}

@media (max-width: 600px) {
  .partner-logo img {
    width: 80px;
  }
}
</style>
