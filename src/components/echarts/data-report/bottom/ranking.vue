<template>
  <el-card>
    <div class="bot-header" slot="header">
      <span>分类销售排行</span>
      <el-radio-group v-model="type" size="small">
        <el-radio-button label="品类"></el-radio-button>
        <el-radio-button label="商品"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="ranking-chart">
      <v-chart :options="options"></v-chart>
    </div>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        type: '品类',
        legend: ['便当', '奶茶', '小吃', '小面', '中餐', '西餐', '快餐'],
      }
    },
    computed: {
      options() {
        let seriesData = this.legend.map(name => {
          return {
            name,
            value: parseInt(Math.random()*100),
            percent: `${(Math.random()*100).toFixed(2)}%`,
            itemStyle: {
              color: ``
            }
          }
        })
        return {
          title: [{
            text: '商品分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            top: 20,
            left: 20
          }, {
            text: '累计订单量',
            subtext: '23412',
            x: '34%',
            y: '48%',
            textStyle: {
              fontSize: 12,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            },
            textAlign: 'center'
          }],
          legend: {
            // legend 的 data 为 series data 的 name 值
            orient: 'verticle',
            right: 20,
            top: 'middle',
            textStyle: {
              color: '#999'
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: function({marker, data}) {
              return [`${marker} ${data.name}`, `数量：${data.value}`, `占比：${data.percent}`].join('<br/>')
            }
          },
          series: [{
            type: 'pie',
            data: seriesData,
            label: {
              normal: {
                show: true,
                position: 'outter',
                formatter: function({data}) {
                  return `${data.name} | ${data.percent}`
                }
              }
            },
            labelLine: {
              normal: {
                length: 3,
                lenght2: 2,
                smooth: true
              }
            },
            avoidLabelOverlap: true,
            // item 间的间隙
            itemStyle: {
              borderWith: 5,
              borderColor: '#fff'
            },
            // 圆心
            center: ['35%', '55%'],
            // 圆内半径、圆外半径
            radius: ['45%', '60%'],
            // 逆时针绘制
            clockwise: false
          }]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bot-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
  }

  .ranking-chart {
    height: 415px;
  }
</style>
