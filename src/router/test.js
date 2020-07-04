export default [
  {
    path: '/map',
    component: () => import('../views/map.vue')
  },
  {
    path: '/test',
    component: () => import('../views/test.vue'),
    meta: {
      keepAlive: true
    }
  }
]