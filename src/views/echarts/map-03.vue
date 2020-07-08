<template>
  <e-tpe :option="option" github></e-tpe>
</template>

<script>
// 必须引入的数据
import 'echarts/map/js/china'

import ETpe from '../../mixins/echarts-template.js'
import cityCenter from '@/assets/json/china-city-center-2.json'

Object.keys(cityCenter).forEach(city => {
  cityCenter[city].value = Math.round(Math.random() * 100)
})

export default {
  mixins: [ETpe],
  computed: {
    option() {
      return {
        visualMap: {
          min: 0,
          max: 100,
          // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
          calculable: true,
          // 拖拽时，是否实时更新。默认值：true
          realtime: true,
          // 指定手柄对应数值的位置。range 应在 min max 范围内
          range: [0, 100],
          text: ['min', 'max'],
          left: '5%',
          top: 'center',
          itemHeight: 200
        },
        grid: {
          left: '85%',
          right: '5%'
        },
        xAxis: {
          // x 轴的位置。top 或 bottom
          position: 'top',
          // 分割线
          splitLine: {
            show: false
          },
          // 轴线
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          axisTick: {
            show: false
          }
        },
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
          left: '20%',
          right: '30%'
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
              // 特效图形
              symbol: 'arrow',
              // 特效标记的大小
              symbolSize: 5,
              // 循环显示特效
              loop: true,
              //特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
              trailLength: 0.2,
              // 配置特效图形的移动动画是否是固定速度，单位像素/秒，设置为大于 0 的值后会忽略 period 配置项
              constantSpeed: 50
            },
            lineStyle: {
              // 边的曲度，支持从 0 到 1 的值，值越大曲度越大
              curveness: -0.25
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
              // 动画中波纹的最大缩放比例
              scale: 3.5,
              // 波纹的绘制方式，可选 'stroke' 和 'fill'
              brushType: 'stroke'
            },
            symbol: 'circle',
            symbolSize: function(data) {
              return data[2] / 10
            }
          },
          {
            type: 'bar',
            data: this.barData(),
            barWidth: '30%',
            itemStyle: {
              barBorderRadius: 5
            }
          }
        ]
      }
    }
  },
  methods: {
    linesData() {
      let { lng: lg, lat: lt } = cityCenter['重庆']
      return Object.entries(cityCenter).map(([name, { lng, lat, value }]) => ({
        name: name,
        value: value,
        coords: [
          [lg, lt],
          [lng, lat]
        ]
      }))
    },
    effectScatterData() {
      return Object.entries(cityCenter).map(([name, { lng, lat, value }]) => ({
        name: name,
        value: [ lng, lat, value ]
      }))
    },
    barData() {
      return Object.entries(cityCenter)
        .map(([name, { lng, lat, value }]) => ([ value, name ]))
        .sort((m, n) => m[0] - n[0])
    }
  }
}
</script>
