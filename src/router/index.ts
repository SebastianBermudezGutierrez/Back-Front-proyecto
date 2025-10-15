import { createRouter, createWebHistory } from '@ionic/vue-router'
import WelcomePage from '@/views/WelcomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import TabsPage from '@/views/TabsPage.vue'

const routes = [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: WelcomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      { path: '', redirect: '/tabs/training' },
      { path: 'training', component: () => import('@/views/TrainingPage.vue') },
      { path: 'daily-log', component: () => import('@/views/DailyLogPage.vue') },
      { path: 'exercise', component: () => import('@/views/ExercisePage.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

