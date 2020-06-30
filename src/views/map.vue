<template>
  <div class="map">
    <v-chart :options="option"></v-chart>
  </div>
</template>

<script>
import 'echarts/map/js/china'
export default {
  data() {
    return {
      option: {
        visualMap: {
          type: 'piecewise',
          min: 0,
          max: 10000,
          left: '90%',
          top: 'middle',
          splitNumber: 10,
          inRange: {
            color: ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#800080']
          },
          outOfRange: {
            color: '#000000'
          }
        },
        series: [{
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
            { name: '上海', value: Math.round(Math.random()*10000) },
            { name: '广西', value: Math.round(Math.random()*10000) },
            { name: '广东', value: Math.round(Math.random()*10000) },
            { name: '江西', value: Math.round(Math.random()*10000) },
            { name: '云南', value: Math.round(Math.random()*10000) },
            { name: '青海', value: Math.round(Math.random()*10000) },
            { name: '西藏', value: Math.round(Math.random()*10000) },
            { name: '甘肃', value: Math.round(Math.random()*10000) },
            { name: '陕西', value: Math.round(Math.random()*10000) },
            { name: '河南', value: Math.round(Math.random()*10000) },
            { name: '山东', value: Math.round(Math.random()*10000) },
            { name: '山西', value: Math.round(Math.random()*10000) },
            { name: '内蒙古', value: Math.round(Math.random()*10000) },
            { name: '辽宁', value: Math.round(Math.random()*10000) },
            { name: '吉林', value: Math.round(Math.random()*10000) },
            { name: '黑龙江', value: Math.round(Math.random()*10000) },
            { name: '宁夏', value: Math.round(Math.random()*10000) },
          ]
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
