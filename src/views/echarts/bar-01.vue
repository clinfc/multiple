<template>
  <e-tpe :option="option" github></e-tpe>
</template>

<script>
import ETpe from '../../mixins/echarts-template.js'
export default {
  mixins: [ETpe],
  data() {
    return {
      base: {
        type: 'bar',
        // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
        stack: 'table',
        data: Array(12).fill(1).map((v, k) => ({
          name: Math.random().toString(16).slice(2, 3+k).toUpperCase(),
          value: 1
        })),
        label: {
          show: true,
          position: 'inside',
          formatter: '{b}',
          color: 'pink'
        },
        itemStyle: {
          color: 'rgba(0, 0, 0, 0)',
          borderWidth: 1,
          borderColor: '#000',
          borderType: 'solid'
        },
        // 同一系列的柱间距离，默认为类目间距的20%，可设固定值
        barCategoryGap: 0
      },
      data: ['#009688', '#5FB878', '#393D49', '#1E9FFF', '#FFB800', '#FF5722', 'pink']
    }
  },
  computed: {
    option() {
      let series = this.data.map(color => {
        let temp = this.$copy(this.base)
        temp.label.color = color
        return temp
      })
      return {
        xAxis: {
          type: 'category',
          show: false,
          // 当 type: category 时，position: 'top' 失效
          // position: 'top',
        },
        yAxis: {
          min: 0,
          max: this.data.length,
          splitLine: {
            show: false
          },
          show: false,
          // 是否是反向坐标轴。默认值：false
          inverse: true
        },
        series: series
      }
    }
  }
}
</script>
