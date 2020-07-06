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
        title: {
          text: '绘图网格分割',
          subtext: '双轴 + 双坐标系',
          left: 'center'
        },
        // 将绘图网格分为上下两个区域
        grid: [
          { bottom: '55%' },
          { top: '55%' }
        ],
        xAxis: [
          {
            type: 'category',
            // 指定此条 X 轴属于绘图网格的上半区域（对应 grid 属性数组的索引值）
            gridIndex: 0
          },
          {
            type: 'category',
            // 指定此条 X 轴属于绘图网格的下半区域（对应 grid 属性数组的索引值）
            gridIndex: 1
          }
        ],
        yAxis: [
          // 指定此条 X 轴属于绘图网格的上半区域（对应 grid 属性数组的索引值）
          { gridIndex: 0, },
          // 指定此条 X 轴属于绘图网格的上半区域（对应 grid 属性数组的索引值）
          { gridIndex: 0, },
          // 指定此条 X 轴属于绘图网格的下半区域（对应 grid 属性数组的索引值）
          { gridIndex: 1, }
        ],
        tooltip: {},
        dataset: {
          source: [
            ['月份', ...Array(12).fill(1).map((i, k) => `${++k}月`)],
            ['红柱', ...Array(12).fill(1).map(() => parseInt(Math.random() * 100))],
            ['折线', ...Array(12).fill(1).map(() => parseInt(Math.random() * 100))],
            ['蓝柱', ...Array(12).fill(1).map(() => parseInt(Math.random() * 100))]
          ]
        },
        series: [{
            type: 'bar',
            // 与 dataset 联动使用，表 dataset 的一行数据为当前图的 data
            seriesLayoutBy: 'row',
            // 对饮 xAxis 属性数组的索引值
            xAxisIndex: 0,
            // 对饮 yAxis 属性数组的索引值
            yAxisIndex: 0
          },
          {
            type: 'line',
            // 与 dataset 联动使用，表 dataset 的一行数据为当前图的 data
            seriesLayoutBy: 'row',
            // 对饮 xAxis 属性数组的索引值
            xAxisIndex: 0,
            // 对饮 yAxis 属性数组的索引值
            yAxisIndex: 1
          },
          {
            type: 'bar',
            // 与 dataset 联动使用，表 dataset 的一行数据为当前图的 data
            seriesLayoutBy: 'row',
            // 对饮 xAxis 属性数组的索引值
            xAxisIndex: 1,
            // 对饮 yAxis 属性数组的索引值
            yAxisIndex: 2
          }
        ]
      }
    }
  }
}
</script>
