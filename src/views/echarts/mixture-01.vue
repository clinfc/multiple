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
          text: '多系列图、dataset',
          left: 'center'
        },
        tooltip: {
          formatter: function(params) {
            let {name, data, marker} = params
            if (params.componentSubType == 'pie') {
              let idx = params.encode.value[0]
              return [`${marker} ${name}`, `用时：${data[idx]} 小时`, `占比：${(data[idx] / 24 * 100).toFixed(2)}%`].join('<br/>')
            }
            if (params.componentSubType == 'bar') {
              let { y: [idx] } = params.encode
              return `${marker} ${name}<br/>收益：${data[idx]}万`
            }
          }
        },
        // 直角坐标系内绘图网格
        grid: {
          top: '35%',
          show: true,
          // 必须指定 show 为 true 才会生效
          backgroundColor: '#5FB878'
        },
        xAxis: {
          type: 'category',
          axisTick: {
            // 保证刻度线和标签对齐
            alignWithLabel: true
          }
        },
        yAxis: {},
        dataset: {
          source: [
            ["1月", 88, 33, '吃饭', 3],
            ["2月", 30, 26, '睡觉', 8],
            ["3月", 23, 18, '学习', 7],
            ["4月", 82, 48, '打游戏', 2],
            ["5月", 93, 19, '运动', 2],
            ["6月", 59, 14, '看小说', 2],
            ["7月", 66, 38],
            ["8月", 43, 8],
            ["9月", 51, 30],
            ["10月", 90, 15],
            ["11月", 24, 10],
            ["12月", 14, 47]
          ]
        },
        series: [
          {
            type: 'bar',
            encode: {
              x: 0,
              y: 2
            },
            itemStyle: {
              color: '#393D49'
            }
          },
          {
            type: 'pie',
            // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
            center: ['30%', '20%'],
            // 饼图的外半径值
            radius: '25%',
            encode: {
              itemName: 3,
              value: 4
            },
            label: {}
          },
          {
            type: 'pie',
            center: ['70%', '20%'],
            // 分别表示饼图的 内半径值 和 外半径值
            radius: ['15%', '25%'],
            encode: {
              itemName: 3,
              value: 4
            },
            // 设置每个 item 的样式，实现隔断效果
            itemStyle: {
              borderWidth: 5,
              borderColor: '#FFF'
            },
            // true：顺时针绘制（默认值）。false：逆时针绘制
            clockwise: false,
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
