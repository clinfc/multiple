export default [
  {
    path: '/admin',
    component: () => import('../views/admin.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/admin/index.vue')
      },
      {
        path: 'index',
        component: () => import('../views/admin/index.vue')
      },
      {
        path: 'echarts-add',
        component: () => import('../views/admin/echarts-add.vue')
      }
    ]
  }
]
