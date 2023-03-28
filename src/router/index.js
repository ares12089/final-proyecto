import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CrearSection from '../components/CrearSection.vue'
import EditarSection from '../components/EditarSection.vue'
import ListarSection from '../components/ListarSection.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/crear',
    name: 'CrearSection',
    component: CrearSection
  },


  {
    path: '/editar/:id',
    name: 'EditarSection',
    component: EditarSection
  },


  {
    path: '/listar',
    name: 'ListarSection',
    component: ListarSection
  },




  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
