import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsOne from '../views/ProductsOne.vue'
import ProductsTwo from '../views/ProductsTwo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   component: AboutView
  },
  {
    path: '/productsone',
    name: 'ProductsOne',
    component: ProductsOne
  },
  {
    path: '/productstwo',
    name: 'ProductsTwo',
    component: ProductsTwo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
