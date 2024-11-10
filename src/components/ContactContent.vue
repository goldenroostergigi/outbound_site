<!-- src/components/ContactContent.vue -->
<template>
  <div class="contact-content">
    <h2>Get in Touch With Us</h2>
    <p>
      We’d love to hear from you! Whether you have a question about features,
      trials, pricing, or anything else, our team is ready to answer all your
      questions.
    </p>

    <div class="contact-info">
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <div>
          <h3>Email</h3>
          <a href="mailto:info@outboundmx.com">contact@outboundmx.com</a>
        </div>
      </div>

      <div class="contact-item">
        <i class="fas fa-phone"></i>
        <div>
          <h3>Phone</h3>
          <a href="tel:+123456789">+52 4424633315</a>
        </div>
      </div>

      <div class="contact-item">
        <i class="fab fa-whatsapp"></i>
        <div>
          <h3>WhatsApp</h3>
          <a href="https://wa.me/524424633315" target="_blank" rel="noopener">Chat with us on WhatsApp</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactContent',
};
</script>

<style scoped>
.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
}

.contact-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  font-family: "Marcellus", serif;
}

.contact-content p {
  font-size: 1.1rem;
  margin-bottom: 40px;
  line-height: 1.6;
  padding: 0 1rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  max-width: 280px;
  text-align: left;
}

.contact-item i {
  font-size: 2rem;
  color: #fd471f;;
  margin-right: 15px;
}

.contact-item h3 {
  margin: 0;
  font-size: 1.3rem;
  color: #333;
  font-weight: 600;
}

.contact-item a {
  color: #fd471f;;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #fd471f;;
}

/* Responsive Design */
@media (min-width: 600px) {
  .contact-info {
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }

  .contact-item {
    max-width: 240px;
    padding: 25px 20px;
  }
}
</style>
