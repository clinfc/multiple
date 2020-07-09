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
        xAxis: {},
        yAxis: {},
        tooltip: {
          formatter: function({data, marker, componentSubType}) {
            if (componentSubType === 'scatter') {
              return [`${marker} ${data[0]}`, `X 轴：${data[1]}`, `Y 轴：${data[2]}`, `value：${data[3]}`].join('<br/>')
            }
            if (componentSubType === 'effectScatter') {
              return [`${marker} ${data[0]}`, `X 轴：${data[2]}`, `Y 轴：${data[1]}`, `value：${data[3]}`].join('<br/>')
            }
          }
        },
        dataset: {
          source: [
            ...Array(24).fill(1).map(() => [
              Math.random().toString(16).slice(2, 6).toLocaleUpperCase(),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 100),
              parseInt(Math.random() * 1000)
            ])
          ]
        },
        series: [
          {
            type: 'scatter',
            encode: {
              x: 1,
              y: 2
            },
            symbolSize: function(row) {
              return row[3] / 25
            },
            itemStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                z: 0.5,
                colorStops: [
                  { offset: 0, color: '#5fb878' },  // 0% 处的颜色
                  { offset: 1, color: '#aaffc2' }   // 100% 处的颜色
                ]
              }
            }
          },
          {
            type: 'effectScatter',
            encode: {
              x: 2,
              y: 1
            },
            zlevel: 2,
            symbolSize: function(row) {
              return row[3] / 50
            },
          }
        ]
      }
    }
  }
}
</script>
