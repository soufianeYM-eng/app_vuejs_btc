import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import store from '@/store'
const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component : Dashboard,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({name:'Login'})
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
