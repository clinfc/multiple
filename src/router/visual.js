export default [
  {
    path: '/visual',
    name: 'visual',
    component: () => import('../views/visual.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/visual/index.vue')
      },
      {
        path: 'index',
        component: () => import('../views/visual/index.vue')
      },
      {
        path: 'basics',
        component: () => import('../views/visual/basics.vue')
      },
      {
        path: 'echarts/:id',
        component: () => import('../views/visual/echarts.vue')
      }
    ]
  }
]