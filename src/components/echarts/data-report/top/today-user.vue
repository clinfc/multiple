<template>
  <top-common title="今日交易用户数" value="8,190,357">

    <v-chart :options="options"></v-chart>

    <div class="top-line" slot="bot">
      <span>退货率</span>
      <span class="emphasize">5.55%</span>
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
        color: ['#3398db'],
        tooltip: {},
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        xAxis: {
          type: 'category',
          show: false,
          data: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'bar',
          data: Array(12).fill(1).map(i => parseInt(Math.random() * 100)),
          barWidth: '60%'
        }]
      }
    }
  }
}
</script>
