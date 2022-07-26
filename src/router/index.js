import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TimeConversion from '../views/TimeConversion.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/banknotes',
    name: 'banknotes',
    component: () => import(/* webpackChunkName: "about" */ '../views/BankNotes.vue')
  },
  {
    path: "/time",
    name: "time",
    component: TimeConversion
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
