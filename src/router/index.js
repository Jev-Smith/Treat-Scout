import { createRouter, createWebHistory } from 'vue-router'
import Snacks from '../views/Snacks.vue'
import Saved from '../views/Saved.vue'

const routes = [
  {
    path: '/',
    name: 'snacks',
    component: Snacks
  },
  {
    path: '/saved',
    name: 'saved',
    component: Saved
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
