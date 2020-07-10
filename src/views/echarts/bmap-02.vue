<template>
  <e-tpe :option="option" github bmap></e-tpe>
</template>

<script>
import ETpe from '../../mixins/echarts-template.js'

import cityCenter from '@/assets/json/china-city-center-2.json'

export default {
  mixins: [ETpe],
  data() {
    return {}
  },
  computed: {
    option() {
      return {
        bmap: {
          zoom: 5,
          roam: true,
          key: this.$env.bmapKey
        },
        series: [
          {
            type: 'lines',
            coordinateSystem: 'bmap',
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
              color: '#ccc',
              // 边的曲度，支持从 0 到 1 的值，值越大曲度越大
              curveness: 0.25
            }
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
    }
  }
}
</script>
