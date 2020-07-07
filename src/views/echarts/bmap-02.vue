<template>
  <e-tpe :option="option" github bmap></e-tpe>
</template>

<script>

import 'echarts/extension/bmap/bmap'
import data from '@/assets/json/bmap.json'
import styleJson from '@/assets/json/styleJson.json'
let lader = data.sort((m, n) => n.value[2] - m.value[2])

import ETpe from '../../mixins/echarts-template.js'
export default {
  mixins: [ETpe],
  data() {
    return {
      option: {
        title: {
          text: '年度销售额',
          subtext: '2019年度销售额汇总',
          left: 'center'
        },
        bmap: {
          key: 'kGNFvzccNhXtVfwGDi5iIQZtACfiViEB',
          center: [104.114129, 37.550339],
          zoom: 5,
          // 允许缩放
          roam: true,
          mapStyle: {
            styleJson: styleJson
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
