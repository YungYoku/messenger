import { createRouter, createWebHistory } from 'vue-router'
import TheMessenger from "@/views/TheMessenger";

const routes = [
  {
    path: '/',
    name: 'TheMessenger',
    component: TheMessenger
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
