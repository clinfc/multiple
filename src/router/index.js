import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index.vue'
import Test from './test.js'
import Visual from './visual.js'
import CSS from './css.js'
import Admin from './admin.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  ...Test,
  ...Visual,
  ...CSS,
  ...Admin,
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
