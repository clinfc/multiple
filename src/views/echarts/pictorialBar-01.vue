<template>
  <e-tpe :option="option" github></e-tpe>
</template>

<script>
import ETpe from '../../mixins/echarts-template.js'

export default {
  mixins: [ETpe],
  data() {
    return {
      option: {
        xAxis: {
          type: 'category'
        },
        yAxis: {
          show: false
        },
        series: [
          {
            // 象形柱图
            type: 'pictorialBar',
            data: Array(12).fill(1).map(() => Math.random() * 100),
            // 图形类型
            symbol: "path://M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
            // 图形的大小
            symbolSize: ['80%', '50%'],
            // 指定图形元素是否重复
            symbolRepeat: true,
            // 图形的两边间隔。必须大于 -50%，否则报错
            symbolMargin: '-20%',
            // 指定图形元素重复时，绘制的顺序
            symbolRepeatDirection: 'end',
            itemStyle: {
              color: '#5FB878',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10
            },
            // 初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果
            animationDelay: function (dataIndex, params) {
              return params.index * 30;
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>
