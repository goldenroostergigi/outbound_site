// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
