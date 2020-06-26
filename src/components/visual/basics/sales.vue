<template>
  <el-card :body-style="{padding: '0 0 20px 0'}">
    <div class="sales-header" slot="header">
      <el-menu :default-active="active" mode="horizontal">
        <el-menu-item index="1">销售额</el-menu-item>
        <el-menu-item index="2">访问量</el-menu-item>
      </el-menu>
      <div class="menu-right">
        <el-radio-group v-model="radio" size="small">
          <el-radio-button label="今日"></el-radio-button>
          <el-radio-button label="本周"></el-radio-button>
          <el-radio-button label="本月"></el-radio-button>
          <el-radio-button label="本年"></el-radio-button>
        </el-radio-group>
        <el-date-picker v-model="date" :picker-options="option" type="datetimerange" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="small"></el-date-picker>
      </div>
    </div>
    <div class="sales">
      <div class="vue-chart">
        <v-chart :options="options"></v-chart>
      </div>
      <div class="ranking">
        <div class="ranking-title">排行榜</div>
        <div class="ranking-item" v-for="i in 10" :key="i">
          <span class="num">{{i}}</span>
          <span class="title">标题</span>
          <span class="total">2,222,222</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>

export default {
  data() {
    return {
      active: '1',
      radio: '今日',
      date: '',
      option: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    }
  },
  computed: {
    options() {
      return {
        title: {
          text: '年度销售额',
          textStyle: {
            color: '#999',
            fontSize: 12
          },
          top: 20,
          left: 25
        },
        grid: { top: 70, left: 60, right: 60, bottom: 50 },
        xAxis: {
          type: 'category',
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#999'
            }
          }
        },
        series: [{
          type: 'bar',
          data: Array(12).fill(1).map(row => parseInt(Math.random()*1000)),
          barWidth: '35%'
        }],
        color: ['#3398DB'],
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 20px;
}
.sales-header {
  position: relative;
  height: 100%;
  .menu-right {
    width: 50%;
    height: 100%;
    padding-left: 10px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.sales {
  display: flex;
  height: 270px;
  .vue-chart {
    width: 70%;
    height: 100%;
  }
  // 排行榜
  .ranking {
    width: 30%;
    font-size: 12px;
    .ranking-title {
      color: #666;
      font-weight: 500;
      padding: 20px 0 15px;
    }
    .ranking-item {
      height: 20px;
      padding: 6px 20px 6px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &>span {
        display: inline-block;
      }
      .num {
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #333;
      }
      .title {
        flex: 1;
        padding-left: 10px;
      }
      .total {
        text-align: right;
      }
    }
  }
}
</style>
