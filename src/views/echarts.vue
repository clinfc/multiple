<template>
  <div class="echarts-demo">
    <router-view></router-view>
    <toolbox home vertical>
      <router-link to="/echarts" title="echarts 首页">
        <i class="el-icon-s-grid"></i>
      </router-link>
      <i class="el-icon-s-fold" @click="drawer = true"></i>
    </toolbox>
    <el-drawer :visible.sync="drawer" direction="rtl" size="260">
      <div class="scroll">
        <echarts-menu vertical @custom-event="drawer = false"></echarts-menu>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import EchartsMenu from '@/components/echarts/menu.vue'

export default {
  components: {
    EchartsMenu
  },
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss">
.echarts-demo {
  .el-drawer {
    .el-drawer__body {
      overflow: hidden;
    }
    .scroll {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
     /*滚动条整体样式*/
    .scroll::-webkit-scrollbar {
      width: 2px;
      height: 1px;
    }
    /*滚动条滑块*/
    .scroll::-webkit-scrollbar-thumb {
      border-radius: 2px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: #535353;
    }
    /*滚动条轨道*/
    .scroll::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
      border-radius: 2px;
      background: #ccc;
    }
  }
}
</style>
