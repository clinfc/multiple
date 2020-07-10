<template>
  <el-card>
    <div class="bot-header" slot="header">
      <span>关键词搜索</span>
    </div>
    <template>
      <div class="top-panel">
        <div class="keyword-title">
          <div>搜索用户数</div>
          <div>搜索量</div>
        </div>
        <div class="keyword-data">
          <div>2,374,893</div>
          <div>1,357,204</div>
        </div>
        <div class="keyword-chart">
          <v-chart :options="option"></v-chart>
        </div>
      </div>
      <el-table :data="table">
        <el-table-column prop="rank" label="排行"></el-table-column>
        <el-table-column prop="keyword" label="关键字"></el-table-column>
        <el-table-column prop="count" label="搜索总量"></el-table-column>
        <el-table-column prop="user" label="搜索用户数"></el-table-column>
        <el-table-column prop="range" label="点击率"></el-table-column>
      </el-table>
      <div class="page">
        <el-pagination :total="table.length" :page-size="4" layout="prev, pager, next" background></el-pagination>
      </div>
    </template>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        option: {
          grid: [
            {
              top: 0,
              left: 0,
              right: '51%',
              bottom: 0
            },
            {
              top: 0,
              left: '51%',
              right: 0,
              bottom: 0
            }
          ],
          xAxis: [
            {
              type: 'category',
              show: false,
              gridIndex: 0,
              boundaryGap: false
            },
            {
              type: 'category',
              show: false,
              gridIndex: 1,
              boundaryGap: false
            }
          ],
          yAxis: [{
              show: false,
              gridIndex: 0
            },
            {
              show: false,
              gridIndex: 1
            },
          ],
          dataset: {
            source: [
              ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
              Array(12).fill(1).map(i => parseInt(Math.random() * 100)),
              Array(24).fill(1).map(i => parseInt(Math.random() * 100)),
            ]
          },
          series: [{
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              seriesLayoutBy: 'row',
              smooth: true,
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                color: '#8CC5FF'
              },
              areaStyle: {
                color: '#D9ECFF'
              }
            },
            {
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              seriesLayoutBy: 'row',
              smooth: true,
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                color: '#8CC5FF'
              },
              areaStyle: {
                color: '#D9ECFF'
              }
            }
          ]
        },
        table: [
          { rank: 1, keyword: '吃鸡', count: '1267', user: 2353, range: '4%' },
          { rank: 2, keyword: '吃鸡', count: '1267', user: 2353, range: '4%' },
          { rank: 3, keyword: '吃鸡', count: '1267', user: 2353, range: '4%' },
          { rank: 4, keyword: '吃鸡', count: '1267', user: 2353, range: '4%' },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
.bot-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
}

.top-panel {
  .keyword-title {
    column-count: 2;
    column-gap: 2%;
    font-size: 14px;
    color: #999;
  }

  .keyword-data {
    margin-top: 5px;
    column-count: 2;
    column-gap: 2%;
    font-size: 22px;
    color: #333;
    letter-spacing: 2px;
    font-weight: 500;
  }

  .keyword-chart {
    height: 50px;
  }
}
.el-table {
  padding: 20px;
  box-sizing: border-box;
}
.page {
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
