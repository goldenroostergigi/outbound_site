<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo/Icon -->
      <RouterLink to="/" class="navbar-logo">
        <img src="../assets/logo_2.svg" alt="Outbound MX" />
      </RouterLink>

      <!-- Hamburger Menu (Visible on Mobile) -->
      <div class="hamburger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Navigation Links -->
      <ul :class="['navbar-menu', { 'is-active': isMenuOpen }]">
        <li><RouterLink to="/" class="regular-menu" @click.native="closeMenu">Home</RouterLink></li>
        <li><RouterLink to="/about-us" class="regular-menu" @click.native="closeMenu">About Us</RouterLink></li>
        <li><RouterLink to="/services" class="regular-menu" @click.native="closeMenu">Services</RouterLink></li>
        <li><RouterLink to="/contact" class="highlight-contact" @click.native="closeMenu">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
/* Import Marcellus Font */

.navbar {
  position: sticky;
  top: 0;
  background-color: #1A1F25;
  padding: 0.9em 1em;
  font-family: 'Marcellus', serif;
  color: #E8E8E8;
  z-index: 1100;
}

ul {
  padding: 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

.navbar-logo img {
  height: 2.9em;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 25px;
  height: 20px;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  height: 2px;
  background-color: #E8E8E8;
  transition: all 0.3s ease;
}

.hamburger.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 1.5em;
}

.navbar-menu li a {
  color: #E8E8E8;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s ease;
}

.regular-menu:hover {
  color: #fd471f;
}

/* Highlight Contact Button (Desktop Only) */
.highlight-contact {
  border: 2px solid #fd471f;
  border-radius: 0.3em;
  padding: 0.5em 1em;
  transition: all 0.3s ease;
  background-color: #1A1F25;
}

.highlight-contact:hover {
  background-color: #fd471f;
  color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-menu {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #ECECEC;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .navbar-menu.is-active {
    max-height: 300px;
  }

  .navbar-menu li {
    width: 100%;
    text-align: center;
    padding: 1em 0;
    border-top: 1px solid #cccccc;
  }

  .navbar-menu li:first-child {
    border-top: none;
  }

  /* Set mobile menu text color to black */
  .navbar-menu li a {
    color: #000000; /* Black text color */
  }

  /* Disable Highlight for Contact Button in Mobile */
  .navbar-menu .highlight-contact {
    background-color: transparent;
    border: none;
    padding: 0.5em 1em;
    color: #333333;
  }

  .navbar-menu .highlight-contact:hover {
    background-color: transparent;
    color: #fd471f;
  }
}
</style>

