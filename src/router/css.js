export default [
  {
    path: '/css',
    component: () => import('../views/css.vue'),
    children: [
      {
        path: 'flex',
        component: () => import('../views/css/flex.vue')
      }
    ]
  }
]