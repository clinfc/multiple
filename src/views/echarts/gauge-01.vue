<template>
  <e-tpe :option="option" github></e-tpe>
</template>

<script>
import ETpe from '../../mixins/echarts-template.js'

export default {
  mixins: [ETpe],
  data() {
    return {
      h: 0,
      i: 0,
      s: 0,
      time: '00:00:00',
      timer: null
    }
  },
  computed: {
    option() {
      return {
        backgroundColor: 'rgba(0, 0, 0, .01)',
        series: [
          {
            type: 'gauge',
            // 仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度
            startAngle: 90,
            // 仪表盘结束角度
            endAngle: -269.999,
            min: 0,
            max: 12,
            splitNumber: 12,
            data: [{
              name: this.time,
              value: this.h,
              // 仪表盘指针
              pointer: {
                // 指针长度，可以是绝对数值，也可以是相对于半径的半分比
                length: '50%',
                // 指针宽度
                width: 6
              },
              // 仪表盘指针样式
              itemStyle: {
                color: '#1d6731'
              }
            }, {
              value: this.i,
              pointer: {
                length: '70%',
                width: 6
              },
              itemStyle: {
                color: '#327945'
              }
            }, {
              value: this.s,
              pointer: {
                length: '85%',
                width: 6
              },
              itemStyle: {
                color: '#5fb878'
              }
            }],
            silent: false,
            animation: false,
            // 仪表盘指针样式
            itemStyle: {
              shadowColor: '#666',
              shadowBlur: 10,
              shadowOffsetX: 5,
              shadowOffsetY: 3
            },
            // 仪表盘轴线相关配置
            axisLine: {
              lineStyle: {
                color: [[1, '#5fb878']],
                width: 10
              }
            },
            // 刻度样式
            axisTick: {
              lineStyle: {
                color: '#FFFFFF'
              }
            },
            // 刻度标签
            axisLabel: {
              // 去掉 0，避免 0 与 12 重叠
              formatter: function(val) {
                return val || ''
              },
              color: '#5fb878',
              fontSize: 16,
              // 标签与刻度线的距离
              distance: 10
            },
            // 分隔线样式。配合 splitNumber 进行理解，分割线条数与 splitNumber 值一致，均分整个表盘
            splitLine: {
              show: true,
              length: 20,
              lineStyle: {
                color: '#5fb878',
                width: 2,
                type: 'solid'
              }
            },
            title: {
              offsetCenter: [0, '-50%'],
              fontSize: 24,
              fontWeight: 'bold'
            },
            detail: {
              show: false
            }
          }
        ]
      }
    }
  },
  created() {
    this.timer = setInterval(() => {
      let [ time, { h, i, s } ] = this.$format(new Date(), 'H:i:s', 'd', true)
      this.time = time
      this.h = parseInt(h) + i / 60
      this.i = i / 60 * 12
      this.s = s / 60 * 12
    }, 250)
  },
  destroyed() {
    clearInterval(this.timer)
  },
}
</script>

<style>
  .box {
    border: 1px solid red;
  }
</style>
