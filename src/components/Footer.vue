<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Top Row (Find a Lawyer, Nominate, Log In) -->
      <div class="footer-top-row">
        <button>Real Estate</button>
        <button>Taxes</button>
        <button>Immigration</button>
      </div>

      <!-- Middle Section (About, Careers, Press, Contact Us) -->
      <div class="footer-middle-section">
        <RouterLink to="/about-us">About Us</RouterLink>
        <RouterLink to="/careers">Careers</RouterLink>
        <RouterLink to="/press">Press</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>


      <!-- Bottom Section (Legal Links) 
      <div class="footer-bottom-section">
        <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
        <RouterLink to="/terms-of-service">Terms of Service</RouterLink>
        <RouterLink to="/cookie-policy">Cookie Policy</RouterLink>
  Add other legal links as needed
      </div> -->

      <!-- Icon Row (Social Media Icons) -->
      <div class="footer-icon-row">
        <a href="https://www.facebook.com/share/14aLQwVJ8m/" target="_blank">
          <img src="../assets/facebook.svg" alt="Facebook" class="social-icon" />
        </a>
        <a href="https://x.com/OutboundMexico" target="_blank">
          <img src="../assets/twitter.svg" alt="Twitter" class="social-icon" />
        </a>
        <a href="https://www.instagram.com/outboundmx/profilecard/" target="_blank">
          <img src="../assets/instagram.svg" alt="Instagram" class="social-icon" />
        </a>
      </div>

      <!-- Copyright -->
      <div class="footer-copyright">
        &copy; Outbound MX 2024
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #37423D; /* Kept your original background color */
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 1. Top Row (Find a Lawyer, Nominate, Log In) */
.footer-top-row {
  display: flex;
  justify-content: center;
  gap: 40px; /* Doubled the gap */
}

.footer-top-row button {
  border: 1px solid grey;
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
}

.footer-top-row button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 2. Middle Section (About, Careers, Press, Contact Us) */
.footer-middle-section {
  display: flex;
  justify-content: center;
  gap: 30px; /* Doubled the gap */
  margin-top: 20px;
  font-family: 'Marcellus', serif;
}

.footer-middle-section a {
  color: #e0e0e0; /* Light grey */
  text-decoration: none;
}

.footer-middle-section a:hover {
  text-decoration: underline;
}

/* 3. Icon Row (Social Media Icons) */
.footer-icon-row {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.social-icon {
  width: 20px;
  height: 20px;
  fill: white;
}

.footer-icon-row a:hover .social-icon {
  fill: #3b3b3b; /* Slight color change on hover */
}

/* 4. Bottom Section (Legal Links) */
.footer-bottom-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 15px;
  margin-top: 20px;
  font-size: 12px;
}

.footer-bottom-section a {
  color: #e0e0e0; /* Light grey */
  text-decoration: none;
}

.footer-bottom-section a:hover {
  text-decoration: underline;
}

/* 5. Copyright */
.footer-copyright {
  text-align: center;
  font-size: 12px;
  color: #e0e0e0; /* Light grey */
  padding-top: 10px;
  margin-top: 10px;
}

/* Responsive Adjustments */
@media (max-width: 600px) {
  .footer {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .footer-top-row {
    flex-direction: column;
    gap: 20px; /* Updated to maintain double gap */
  }

  .footer-top-row button {
    width: 100%;
  }

  .footer-middle-section {
    flex-direction: column;
    gap: 20px; /* Updated to maintain double gap */
  }

  .social-icon {
    width: 24px;
    height: 24px;
  }

  .footer-bottom-section {
    font-size: 14px;
    gap: 10px;
  }

  .footer-copyright {
    font-size: 14px;
    padding-top: 15px;
  }
}
</style>
