export default [
  {
    path: '/echarts',
    component: () => import('../views/echarts.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/echarts/index.vue')
      },
      {
        path: 'index',
        component: () => import('../views/echarts/index.vue')
      },
      {
        path: 'map-01',
        component: () => import('../views/echarts/map-01.vue')
      }
    ]
  }
]
