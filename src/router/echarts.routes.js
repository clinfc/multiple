const name = [
  'index',
  'bar-01',
  'map-01',
  'map-02',
  'map-03',
  'bmap-01',
  'bmap-02',
  'gauge-01',
  'tree-01',
  'scatter-01',
  'scatter-02',
  'pictorialBar-01',
  'mixture-01',
  'partition-01',
  'tool-01',
  // 数据报表
  'data-report',
  // app 流量
  'app-state'
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
