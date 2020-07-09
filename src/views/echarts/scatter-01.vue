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
          formatter: function({data, marker}) {
            return [marker, `X 轴：${data[0]}`, `Y 轴：${data[1]}`, `value：${data[2]}`].join('<br/>')
          }
        },
        dataset: {
          source: [
            Array(24).fill(1).map(() => parseInt(Math.random() * 100)),
            Array(24).fill(1).map(() => parseInt(Math.random() * 100)),
            Array(24).fill(1).map(() => parseInt(Math.random() * 100))
          ]
        },
        series: [
          {
            type: 'scatter',
            // 此处设置为 row 且不通过 encode 指定 x、y 轴数据源时
            // 默认 dataset.source[0] 为 x 轴数据源
            // 默认 dataset.source[1] 为 y 轴数据源
            seriesLayoutBy: 'row',
            // 这里的 row 数据为 dataset.source 的一列数据
            symbolSize: function(row) {
              return row[2] / 5
            }
          }
        ]
      }
    }
  }
}
</script>
