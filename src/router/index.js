import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index.vue'
import Visual from './visual.js'
import CSS from './css.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
].concat(Visual, CSS)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
