import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPages from '../pages/MemoriesPages.vue';


const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPages,
  },
  {
    path: '/memories/:id',
    component: () => import ('../pages/MemoriesDetails.vue')
  }
  
      
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
