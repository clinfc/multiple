<template>
  <ul class="aside">
    <template v-for="menu in menus">
      <li class="aside-item" :key="menu.name" :class="menu.type">
        <router-link :to="menu.to">{{menu.name}}</router-link>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: '首页', type: 'title', to: '/admin' },
        { name: 'ECharts', type: 'title', to: '' },
        { name: '添加示例', type: 'subhead', to: '/admin/echarts-add' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  width: calc(100% + 17px);
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  .aside-item {
    border-left: 5px solid transparent;
    &:last-of-type {
      margin-bottom: 15px;
    }
    a {
      text-decoration: none;
      display: block;
      font-size: 15px;
      color: #333333;
      height: 40px;
      line-height: 40px;
      padding-left: 12px;
    }
    &.title {
      margin-top: 15px;
      border-left-color: #009E94;
      &>a {
        font-size: 16px;
        font-weight: 700;
      }
    }
    &.subhead {}
  }
}
</style>
