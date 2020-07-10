const name = [
  'index',
  'map-01',
  'map-02',
  'map-03',
  'bmap-01',
  'bmap-02',
  'gauge-01',
  'tree-01',
  'scatter-01',
  'scatter-02',
  'mixture-01',
  'legend-01',
  'partition-01',
  'tool-01',
  'data-report'
]

const children = name.map(item => {
  return {
    path: item,
    component: () => import(`../views/echarts/${item}.vue`)
  }
})

export default [
  {
    path: '/echarts',
    component: () => import('../views/echarts.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/echarts/index.vue')
      },
      ...children
    ]
  }
]
