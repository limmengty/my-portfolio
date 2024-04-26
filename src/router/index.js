import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Work from '@/components/Project.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },  
  {
    path: '/work',
    component: Work,
  },

]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
