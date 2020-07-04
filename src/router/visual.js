export default [
  {
    path: '/visual',
    name: 'visual',
    component: () => import('../views/visual.vue'),
    children: [
      {
        path: 'basics',
        component: () => import('../views/visual/basics.vue')
      }
    ]
  }
]