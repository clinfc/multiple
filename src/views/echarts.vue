<template>
  <div class="echarts-demo">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <toolbox home vertical>
      <router-link to="/echarts" title="echarts 首页">
        <i class="el-icon-s-grid"></i>
      </router-link>
      <i class="el-icon-s-fold" @click="drawer = true"></i>
    </toolbox>
    <el-drawer :visible.sync="drawer" direction="rtl" size="260" :with-header="false">
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
      overflow: hidden;
    }
  }
}
</style>
