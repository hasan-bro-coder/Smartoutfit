import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'about',
      //   // route level code-splitting
      //   // this generates a separate chunk (About.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      component: () => import('../views/product.vue')
    },
    {
      path: '/order/:id',
      name: 'order',
      component: () => import('../views/order.vue')
    },
    {
      path: '/admin/',
      name: 'admin',
      component: () => import('../components/admin.vue')
    },
    {
      path: '/admin/orders',
      name: 'orders',
      component: () => import('../components/admin_order.vue')
    },
    {
      path: '/admin/products',
      name: 'products',
      component: () => import('../components/admin_product.vue')
    },
  ]
})

export default router
