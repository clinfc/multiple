const name = [
  'basic',
  'demo'
]

const children = name.map(item => ({
  path: item,
  component: () => import(`../views/svg/${item}.vue`)
}))

export default [
  {
    path: '/svg',
    component: () => import('../views/svg.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/svg.vue')
      },
      ...children
    ]
  }
]
