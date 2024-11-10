<template>
  <div class="members-container">
    <div class="member-card" v-for="member in members" :key="member.id">
      <!-- Profile Image -->
      <img :src="member.image" alt="Profile Image" class="profile-image" />

      <!-- Name & Title -->
      <h3 class="member-name">{{ member.name }}</h3>
      <p class="member-title">{{ member.title }}</p>

      <!-- Brief Section -->
      <ul class="brief-section">
        <li v-for="(point, index) in member.brief" :key="index">{{ point }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// Import images directly at the top of the script
import MiguelImage from '../assets/perfiles/Miguel.png';
import MauricioImage from '../assets/perfiles/Mauricio.png';
import BegonaImage from '../assets/perfiles/Begoña.png';
import JavierImage from '../assets/perfiles/Javier.png';

export default {
  name: 'MembersPresentation',
  data() {
    return {
      members: [
        {
          id: 1,
          name: 'Miguel León Urzúa',
          title: 'Founding Partner',
          image: MiguelImage,
          brief: [
            'Experienced in civil, commercial, and tax law, with a law degree from ITAM, and a background in both public and private sectors.',
            'Began his career at Tribunal de Justicia Administrativa in Jalisco and later expanded his expertise in notarial and transactional law at Correduría Pública 56 in Guadalajara.',
            'Provided freelance consulting with Gastélum Abogados, specializing in mediation, legal writing, and research, contributing to the publication Obligaciones with Editorial Porrúa.'
          ]
        },
        {
          id: 2,
          name: 'Mauricio Peña Barrena',
          title: 'Founding Partner',
          image: MauricioImage,
          brief: [
            'Founded Outbound Mexico in 2022 to address the legal needs of international clients in Mexico, specializing in real estate, trusts, and foreign direct investment.',
            'Started his career at Lammoglia Abogados, gaining expertise in transactional and environmental law, with a law degree from ITAM.',
            'Committed to agile and efficient client service, offering innovative strategies tailored to clients\' unique challenges in Mexico’s legal landscape.'
          ]
        },
        {
          id: 3,
          name: 'Begoña Legarrea Cervantes',
          title: 'Head of Intellectual Property',
          image: BegonaImage,
          brief: [
            'Brings extensive experience in civil and corporate law from Carrillo Chontkowsky y Gonzalez and RVA Abogados, specializing in intellectual property.',
            'Holds an IB Diploma and a Law Degree from ITAM, providing a strong foundation for comprehensive legal services.',
            'Passionate about music, art, and community-building, adding a unique, client-centered perspective to our firm.'
          ]
        },
        {
          id: 4,
          name: 'Javier Acuña de la Torre',
          title: 'Head of Investment Law',
          image: JavierImage,
          brief: [
            'Brings extensive expertise from his tenure at Blackbox Startup Law, specializing in corporate law and consulting for international clients.',
            'Holds a Law Degree from ITAM, equipping him to provide comprehensive legal services in civil, mercantile, and tech-focused business law.',
            'With interests in law, technology, and innovative businesses, he offers a fresh perspective to the field.'
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.members-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
}

.member-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  width: 260px; /* Slightly wider to fit brief section */
  margin: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.member-name {
  font-weight: bold;
  font-size: 1.2em;
  margin: 10px 0 5px;
  font-family: 'Marcellus', serif;
}

.member-title {
  font-size: 1em;
  color: #666666;
  margin-bottom: 15px;
  font-family: 'Marcellus', serif;
}

.brief-section {
  text-align: left;
  padding-left: 20px; /* Indentation for bullet points */
}

.brief-section li {
  margin-bottom: 5px;
  line-height: 1.5em;
}

@media (max-width: 600px) {
  .member-card {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
