<template>
  <div class="home-page">
    <div class="card" v-for="row in data" :key="row.title">
      <div class="header">{{row.title}}</div>
      <div class="main">
        <template v-for="ct in row.content">
          <router-link class="item" :key="ct.name" :to="ct.route">{{ct.name}}</router-link>
        </template>
      </div>
    </div>
    <toolbox vertical qq></toolbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'CSS',
          content: [
            { name: 'Flex 调试器', route: '/css/flex' }
          ]
        },
        {
          title: '数据可视化',
          content: [
            { name: '混合案例', route: '/visual/basics' },
            { name: 'ECharts', route: '/echarts' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 1200px;
  margin: auto;
  .card {
    margin-top: 20px;
    .header {
      padding: 15px 10px;
      font-size: 24px;
      color: #333;
      border-bottom: 1px solid #EAEAEA;
    }
    .main {
      padding: 15px 0;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      .item {
        display: inline-block;
        width: 210px;
        height: 70px;
        line-height: 70px;
        text-decoration: none;
        color: #5fb878;
        padding: 0 10px;
        margin: 10px;
        border: 1px solid #5fb878;
        border-radius: 5px;
        &:hover {
          box-shadow: 0 0 7px 0 #5fb878;
        }
      }
    }
  }
}
</style>
