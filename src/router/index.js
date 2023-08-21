import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Films from '../views/Films.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films/:id?',
      name: 'films',
      component: Films
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: About
    },
    {
      path: '/categorie/:id?',
      name: 'categorie',
      component: About
    },
    {
      path: '/panier',
      name: 'panier',
      component: About
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: About
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: About
    },
  ]
})

export default router
