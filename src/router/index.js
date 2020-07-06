import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = []
const context = require.context('./', false, /\.routes\.js$/)

context.keys().forEach(key => {
  routes = routes.concat(context(key).default)
})

routes = [
  {
    path: '',
    component: () => import('../views/index.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/index',
    component: () => import('../views/index.vue'),
    meta: {
      keepAlive: true
    }
  },
  ...routes,
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
