<template>
  <div class="echarts-demo">
    <v-chart :options="option"></v-chart>
     <el-button type="primary" icon="el-icon-info" circle @click="drawer = true"></el-button>
    <el-drawer :visible.sync="drawer">
      <template v-slot:title>
        <div>配置详情</div>
      </template>
      <mk-code :txt="txt"></mk-code>
    </el-drawer>
  </div>
</template>

<script>
import MkCode from '@/components/markdown-code.vue'
export default {
  components: {
    MkCode
  },
  data() {
    return {
      drawer: false,
      option: {
        title: {
          text: '基础案例',
          left: 'center',
          top: 10
        },
        grid: {
          top: 50,
          left: 50,
          right: '10%',
          bottom: 50,
          show: true,
          // 网格背景色，必须设置 show 值为 true 才会生效
          backgroundColor: '#7fffd4'
        },
        xAxis: {
          type: 'category',
          data: Array(12).fill(1).map((i, k) => `${++k}月`),
          // 坐标轴轴线相关设置
          axisLine: {
            // 坐标轴线线的CSS样式
            lineStyle: {
              color: 'red'
            }
          },
          // 坐标轴刻度相关设置
          axisTick: {
            // 刻度线和标签对齐。默认值：false
            alignWithLabel: true,
            lineStyle: {
              color: '#000000',
              width: 5
            }
          },
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            color: '#8a2be2'
          }
        },
        yAxis: {
          // 隐藏坐标轴刻度
          axisTick: {
            show: false
          },
          // 隐藏坐标轴线
          axisLine: {
            show: false
          },
          // 坐标轴在 grid 区域中的分隔线
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#bdb76b'
            }
          }
        },
        // 提示框组件
        tooltip: {
          // 触发类型。item/axios/none
          trigger: 'item'
        },
        series: [{
          type: 'bar',
          data: Array(12).fill(1).map(() => parseInt(Math.random()*100)),
          // 柱子的宽度
          barWidth: '35%'
        }],
        // 调色盘颜色列表
        color: 'pink'
      }
    }
  },
  computed: {
    txt() {
      return `\`\`\`js let option = ${JSON.stringify(this.option, undefined, 2)}\n\`\`\``
    }
  },
}
</script>

<style lang="scss">
.echarts-demo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &>.el-button {
    position: fixed;
    bottom: 75px;
    right: 100px;
    font-size: 24px;
    padding: 7px;
  }
  .el-drawer .el-drawer__body {
    overflow: hidden;
  }
}
</style>
