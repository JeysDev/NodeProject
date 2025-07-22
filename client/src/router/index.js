import { createRouter, createWebHistory } from 'vue-router' 
import HomeView from '../views/HomeView.vue' 
import About from '../views/AboutView.vue'

const router = createRouter({ 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    { 
      path: '/', 
      name: 'Home', 
      component: HomeView, 
      meta: { icon: 'mdi-monitor-dashboard' }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { 
        icon: 'mdi-information' 
}
    }
  ]
})

export default router;
