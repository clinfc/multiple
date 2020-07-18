<template>
  <div class="app-state">
    <div class="filter-form">
      <el-form :inline="true" :model="form" class="filter-form-inline">
        <el-form-item label="时间类型">
          <el-radio-group v-model="form.type">
            <el-radio label="year">年</el-radio>
            <el-radio label="month">月</el-radio>
            <el-radio label="date">日</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="时间选择" style="margin-left: 50px;">
          <el-date-picker v-model="form.value" :type="form.type" @change="change" size="small"></el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <div class="chart">
      <e-tpe :option="option" github></e-tpe>
    </div>
  </div>
</template>

<script>
import ETpe from '../../mixins/echarts-template.js'

export default {
  mixins: [ETpe],
  data() {
    return {
      form: {
        type: 'year',
        value: '',
      },
      data: [],
      color: ['rgba(0, 0, 0, .2)', '#009688', '#5FB878', 'pink', '#FFB800','#1E9FFF',  '#FF5722'],
      axisLabel: ['', '下载量', '注册量', '注册率']
    }
  },
  watch: {
    'form.type': function(val) {
      this.form.value = ''
    }
  },
  computed: {
    // 合成表格部分的 series 数据
    tableSeries() {
      return this.data.map(data => {
        return {
          type: 'bar',
          stack: 'table',
          data: data.slice(0, 4).map((v, k) => ({
            name: v,
            value: 1 ,
            itemStyle: {
              color: this.color[k]
            }
          })),
          xAxisIndex: 1,
          yAxisIndex: 1,
          label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            color: '#333'
          },
          // 同一系列的柱间距离，默认为类目间距的20%，可设固定值
          barCategoryGap: 0,
          itemStyle: {
            color: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            borderColor: '#333'
          }
        }
      })
    },
    option() {
      return {
        dataset: {
          source: this.data
        },
        grid: [
          { bottom: '20%', top: '10' },
          { top: '80%' }
        ],
        xAxis: [
          {
            gridIndex: 0,
            type: 'category',
            show: false
          },
          {
            gridIndex: 1,
            position: 'top',
            show: false,
            min: 0,
            // 此处 max 的作用是表格与 X 轴长度一致，否则特殊情况下会出现表格宽度比 X 轴短的情况
            max: this.data.length
          }
        ],
        yAxis: [
          {
            gridIndex: 0
          },
          {
            gridIndex: 1,
            type: 'category',
            data: this.axisLabel,
            inverse: true,
            axisTick: {
              show: false
            }
          },
          {
            gridIndex: 0,
            splitLine: {
              show: false
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: ({seriesName, encode, data, marker, componentSubType}) => {
            if (this.axisLabel.includes(seriesName)) {
              let y = componentSubType == 'line' ? encode.y[0] - 1 : encode.y[0]
              return `${marker} ${seriesName}:  ${data[y]}`
            }
          }
        },
        series: [
          {
            name: this.axisLabel[1],
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            encode: {
              x: 0,
              y: 1
            },
            symbol: 'path://M953.7536 530.432l-418.7648-418.5088a32.4608 32.4608 0 0 0-45.9264 0l-418.7648 418.56a65.1264 65.1264 0 0 0 45.9264 111.104h44.1344v298.6496c0 18.0224 14.5408 32.5632 32.5632 32.5632H446.976v-227.7888h113.8176V972.8h270.336a32.512 32.512 0 0 0 32.512-32.5632v-298.6496h44.1344a65.1776 65.1776 0 0 0 45.9776-111.104z',
            symbolRepeat: true,
            symbolSize: ['40%', '50%'],
            symbolOffset: ['-70%', 0],
            // 此值必须小于 50%，否则将报错
            symbolMargin: '-35%',
            // 指定图形元素重复时，绘制的顺序
            symbolRepeatDirection: 'end',
            // symbolClip: true,
            itemStyle: {
              // color: '#5FB878',
              shadowColor: '#d87a7f',
              shadowBlur: 5,
              shadowOffsetY: 2
            },
            z: 2
          },
          // 此 bar 用于占位，否则 pictorialBar 将与 bar 重合
          {
            name: this.axisLabel[1],
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            encode: {
              x: 0,
              y: 1
            },
            itemStyle: {
              color: 'rgba(0, 0, 0, 0)'
            },
            z: 1
          },
          {
            name: this.axisLabel[2],
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            encode: {
              x: 0,
              y: 2
            },
            z: 1
          },
          {
            name: this.axisLabel[3],
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 2,
            encode: {
              x: 0,
              y: 4
            },
            smooth: true,
            itemStyle: {
              borderWidth: 5
            },
            z: 3
          },
          ...this.tableSeries
        ]
      }
    }
  },
  methods: {
    // 日期选择和刷新数据
    change() {
      let len = 12
      switch(this.form.type) {
        case 'year':
          this.axisLabel[0] = '月'
          len = 12
          break
        case 'month':
          this.axisLabel[0] = '日'
          let date = this.form.value
          date.setMonth(date.getMonth()+1, 0)
          len = date.getDate()
          break
        case 'date':
          this.axisLabel[0] = '时'
          len = 24
          break
      }
      this.data = Array(len).fill(1).map((v, k) => {
        let down = this.$random(20, 100)
        let regi = this.$random(5, down)
        let perc = this.$percent(regi, down, 2)
        return [++k, down, regi, perc, parseFloat(perc) / 100]
      })
    }
  },
  created() {
    this.change()
  }
}
</script>

<style lang="scss" scoped>
.app-state {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  .filter-form {
    flex-shrink: 0;
    height: 90px;
    overflow: hidden;
    .filter-form-inline {
      width: 1200px;
      margin: 30px auto 0;
      display: flex;
      justify-content: flex-end;
    }
  }
  .chart {
    position: relative;
    flex: 1;
  }
}
</style>
