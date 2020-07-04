<template>
  <div class="map">
    <v-chart :options="option"></v-chart>
    <toolbox direction="br"></toolbox>
    <github :path="`${$route.path}.vue`"></github>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: 'legend（图例组件）',
          left: '25%',
          top: 10
        },
        grid: {
          top: '30%',
          right: '30%'
        },
        // x 轴
        xAxis: {
          data: ['一季度', '二季度', '三季度', '四季度']
        },
        yAxis: {},
        dataset: {
          source: [
            ['一季度', 30, 100, '分类1', 100],
            ['二季度', 60, 30, '分类2', 200],
            ['三季度', 40, 50, '分类3', 50],
            ['四季度', 90, 99, '分类4', 25]
          ]
        },
        // 图例声明
        legend: {
          data: ['饼图', '折线图', '柱状图'],
          // 图例列表的布局朝向
          orient: 'vertical',
          top: 10
        },
        series: [
          {
            // 图例绑定
            name: '饼图',
            type: 'pie',
            center: ['80%', '30%'],
            radius: '10%',
            encode: {
              itemName: 3,
              value: 4
            }
          },
          {
            // 图例绑定
            name: '折线图',
            type: 'line',
            encode: {
              x: 0,
              y: 2
            }
          },
          {
            // 图例绑定
            name: '柱状图',
            type: 'bar',
            encode: {
              x: 0,
              y: 1
            }
          }
        ]
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
