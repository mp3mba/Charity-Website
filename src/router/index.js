import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import About from '../views/AboutView.vue'
import Causes from '../views/CauseView.vue'
import Team from '../views/TeamView.vue'
import Faqs from '../views/FaqView.vue'
import News from '../views/NewsView.vue'
import Contact from '../views/ContactView.vue'
import Donate from '../views/DonateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/causes',
    name: 'causes',
    component: Causes
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: Faqs
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contact
  },
  {
    path: '/donate-now',
    name: 'donate',
    component: Donate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
