<template>
  <e-tpe :option="option" github></e-tpe>
</template>

<script>
import ETpe from '../../mixins/echarts-template.js'

const label = {
  distance: 0
}

export default {
  mixins: [ETpe],
  data() {
    return {
      option: {
        grid: {
          top: '55%'
        },
        xAxis: {
          type: 'category',
          data: Array(6).fill(1).map((v, k) => `${++k}组`),
          axisTick: {
            // 刻度与 label 对齐
            alignWithLabel: true
          }
        },
        tooltip: {},
        // 工具箱
        toolbox: {
          show: true,
          top: '48.5%',
          right: '15%',
          feature: {
            // 数据视图
            dataView: {
              show: true,
              readOnly: true
            },
            // 动态类型切换
            magicType: {
              show: true,
              // 'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）
              type: ['line', 'bar', 'stack', 'tiled'],
            },
            // 初始化，类似于 form-reset
            restore: {
              show: true,
            },
            // 下载，保存为图片
            saveAsImage: {
              show: true,
            }
          }
        },
        // 图例组件
        legend: [
          // pie 图的 legend
          {
            top: 20,
            left: 'center',
            // pie 图的 data.name 将与此 legend 进行绑定
            data: Array(12).fill(1).map((v, k) => `${++k}月`)
          },
          // bar 图的 legend
          {
            top: '50%',
            left: 'center',
            // bar 图的 name 属性将与此 legend 进行绑定
            data: ['一季度', '二季度', '三季度', '四季度']
          }
        ],
        dataZoom: {
          type: 'slider'
        },
        yAxis: {},
        series: [
          {
            type: 'pie',
            data: Array(12).fill(1).map((v, k) => ({ name: `${++k}月`, value: Math.round(Math.random()*100)})),
            center: ['25%', '25%'],
            radius: ['20%', '30%']
          },
          {
            name: '一季度',
            type: 'bar',
            // 消除 bar 之间的间隙
            barGap: 0,
            data: Array(6).fill(1).map(() => Math.round(Math.random()*100))
          },
          {
            name: '二季度',
            type: 'bar',
            data: Array(6).fill(1).map(() => Math.round(Math.random()*100))
          },
          {
            name: '三季度',
            type: 'bar',
            data: Array(6).fill(1).map(() => Math.round(Math.random()*100))
          },
          {
            name: '四季度',
            type: 'bar',
            data: Array(6).fill(1).map(() => Math.round(Math.random()*100))
          }
        ]
      }
    }
  }
}
</script>
