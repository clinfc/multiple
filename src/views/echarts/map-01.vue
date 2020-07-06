<template>
  <e-tpe :option="option" github></e-tpe>
</template>

<script>
import ETpe from '../../mixins/echarts-template.js'

// 必须引入的数据
import 'echarts/map/js/china'

export default {
  mixins: [ETpe],
  data() {
    return {
      option: {
        visualMap: {
          type: 'piecewise',
          top: 'middle',
          left: 20,
          min: 0,
          max: 10000,
          splitNumber: 10,
          outOfRange: {
            color: '#5fb878'
          }
        },
        series: [
          {
            type: 'map',
            map: 'china',
            label: {
              show: true
            },
            data: [
              { name: '重庆', value: Math.round(Math.random()*10000) },
              { name: '北京', value: Math.round(Math.random()*10000) },
              { name: '天津', value: Math.round(Math.random()*10000) },
              { name: '四川', value: Math.round(Math.random()*10000) },
              { name: '贵州', value: Math.round(Math.random()*10000) },
              { name: '江苏', value: Math.round(Math.random()*10000) },
              { name: '河北', value: Math.round(Math.random()*10000) },
              { name: '湖南', value: Math.round(Math.random()*10000) },
              { name: '湖北', value: Math.round(Math.random()*10000) },
              { name: '安徽', value: Math.round(Math.random()*10000) },
              { name: '浙江', value: Math.round(Math.random()*10000) },
              { name: '福建', value: Math.round(Math.random()*10000) },
              { name: '新疆', value: Math.round(Math.random()*10000) },
              { name: '上海', value: Math.round(Math.random()*10000) }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>
