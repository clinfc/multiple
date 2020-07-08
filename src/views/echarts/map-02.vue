<template>
  <e-tpe :option="option" github></e-tpe>
</template>

<script>
// 必须引入的数据
import 'echarts/map/js/china'

import ETpe from '../../mixins/echarts-template.js'
import cityCenter from '@/assets/json/china-city-center-2.json'

export default {
  mixins: [ETpe],
  computed: {
    option() {
      return {
        // 地理坐标系组件
        geo: {
          show: true,
          // 地图类型
          map: 'china',
          // 开启鼠标缩放和平移漫游
          roam: true,
          // 当前视角的缩放比例
          zoom: 1,
          // 当前视角的中心点，用经纬度表示
          center: [104.114129, 37.550339],
          itemStyle: {
            // 正常状态下的样式，也可以去掉 normal 这一层壳
            normal: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(255, 192, 203, .01)'
                  },
                  {
                    offset: 0.95,
                    color: 'rgba(255, 192, 203, .1)'
                  }
                ]
              }
            },
            emphasis: {
              color: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    // 0% 处的颜色
                    offset: 0,
                    color: 'rgba(255, 192, 203, .05)'
                  },
                  {
                    // 100% 处的颜色
                    offset: 0.95,
                    color: 'rgba(255, 192, 203, .25)'
                  }
                ]
              }
            }
          },
          // 另一种写法
          // itemStyle: {
          //   color: {
          //     type: 'radial',
          //     x: 0.5,
          //     y: 0.5,
          //     r: 0.5,
          //     colorStops: [
          //       {
          //         offset: 0,
          //         color: 'rgba(255, 192, 203, .01)'
          //       },
          //       {
          //         offset: 0.95,
          //         color: 'rgba(255, 192, 203, .1)'
          //       }
          //     ]
          //   }
          // },
          // emphasis: {
          //   itemStyle: {
          //     color: {
          //       type: 'radial',
          //       x: 0.5,
          //       y: 0.5,
          //       r: 0.5,
          //       colorStops: [
          //         {
          //           offset: 0,
          //           color: 'rgba(255, 192, 203, .1)'
          //         },
          //         {
          //           offset: 0.95,
          //           color: 'rgba(255, 192, 203, .25)'
          //         }
          //       ]
          //     }
          //   }
          // }
        },
        series: [
          {
            type: 'lines',
            // 类似于 z-index
            zlevel: 2,
            // 坐标系
            coordinateSystem: 'geo',
            data: this.linesData(),
            // 线特效
            effect: {
              show: true,
              color: 'pink',
              // 特效图形
              symbol: 'arrow',
              // 特效标记的大小
              symbolSize: 5,
              // 循环显示特效
              loop: true,
              //特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
              trailLength: 0.2
            },
            lineStyle: {
              color: '#5fb878',
              // 边的曲度，支持从 0 到 1 的值，值越大曲度越大
              curveness: 0.25
            },
            label: {
              // 标签位置。'start' 线的起始点。'middle' 线的中点。'end' 线的结束点
              position: 'middle',
              // 标签内容格式器
              formatter: '{b} - {c}',
              color: '#333333',
              fontSize: 16,
              // 高亮时显示
              emphasis: {
                show: true
              }
            }
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 1,
            data: this.effectScatterData(),
            itemStyle: {
              color: '#5fb878',
            },
            // 涟漪特效相关配置
            rippleEffect: {
              color: '#5fb878',
              // 动画中波纹的最大缩放比例
              scale: 3.5,
              // 波纹的绘制方式，可选 'stroke' 和 'fill'
              brushType: 'stroke'
            },
            symbol: 'diamond'
          }
        ]
      }
    }
  },
  methods: {
    linesData() {
      let { lng: lg, lat: lt } = cityCenter['重庆']
      return Object.entries(cityCenter).map(([name, { lng, lat }]) => ({
        name: name,
        coords: [
          [lg, lt],
          [lng, lat]
        ],
        value: Math.round(Math.random() * 100)
      }))
    },
    effectScatterData() {
      return Object.entries(cityCenter).map(([name, { lng, lat }]) => ({
        name: name,
        value: [ lng, lat, Math.round(Math.random() * 100)]
      }))
    }
  }
}
</script>
