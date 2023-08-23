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
      component: () => import('../views/Home.vue')
    },
    {
      path: '/films/:id?',
      name: 'films',
      component: () => import('../views/Films.vue'),
      props: true,
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: () => import('../views/About.vue')
    },
    {
      path: '/categorie/:id?',
      name: 'categorie',
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/panier',
      name: 'panier',
      component: () => import('../views/Panier.vue')
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('../views/Inscription.vue')
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: () => import('../views/Connexion.vue')
    },
  ]
})

export default router
