<template>
  <ve-bmap :settings="settings" :title="title" :series="series" height="100%"></ve-bmap>
</template>

<script>
import data from '@/assets/json/bmap.json'
import styleJson from '@/assets/json/styleJson.json'

let lader = data.sort((m, n) => n.value[2] - m.value[2])

export default {
  data() {
    return {
      title: {
        text: '年度销售额',
        subtext: '2019年度销售额汇总',
        left: 'center'
      },
      settings: {
        key: process.env.BMAP_AK,
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          zoam: true,
          mapStyle: {
            styleJson
          }
        }
      },
      series: [{
        name: '销售额',
        // 散点图
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: lader.slice(10),
        encode: {
          value: 2
        },
        itemStyle: {
          color: 'pink'
        },
        // 设置点的大小
        symbolSize: function(val) {
          return val[2] / 30
        },
        label: {
          // show: true,
          position: 'right',
          formatter: function({data}) {
            return `${data.name}: ${data.value[2]}`
          }
        },
        // 起强调作用。在 :hover 时才显示 label
        emphasis: {
          label: {
            show: true
          }
        }
      }, {
        name: '销售排行 TOP-10',
        // 带动效的散点图
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: lader.slice(0, 10),
        symbolSize: function(val) {
          return val[2] / 30
        },
        encode: {
          value: 2
        },
        label: {
          show: true,
          formatter: function({data}) {
            return `${data.name}: ${data.value[2]}`
          },
          position: 'right'
        },
        // 悬浮动画
        hoverAnimation: true,
        // 波纹
        rippleEffect: {
          brushType: 'stroke'
        },
        itemStyle: {
          color: 'red',
          shadowBlur: 10,
          shadowColor: '#999'
        }
      }]
    }
  }
}
</script>

<style>
</style>
