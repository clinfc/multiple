<template>
  <top-common title="累计订单量" value="2,567,349">

    <v-chart :options="options"></v-chart>

    <div class="top-line" slot="bot">
      <span>昨日订单量</span>
      <span class="emphasize">30,000,000</span>
    </div>
  </top-common>
</template>

<script>
import TopMixin from './mixin.js'
export default {
  mixins: [TopMixin],
  computed: {
    options() {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false,
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        series: [{
          type: 'line',
          data: Array(12).fill(1).map(i => parseInt(Math.random() * 100)),
          areaStyle: {
            color: 'red'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }]
      }
    }
  }
}
</script>

