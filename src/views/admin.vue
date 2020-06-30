<template>
  <div class="admin">
    <el-row :gutter="20">
      <el-col :span="4">
        <aside-menu></aside-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AsideMenu from '@/components/admin/aside.vue'
export default {
  components: {
    AsideMenu
  }
}
</script>

<style lang="scss" scoped>
.admin {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
}
.el-row {
  width: 1200px;
  height: 100%;
  overflow: hidden;
  .el-col {
    height: 100%;
    overflow: hidden;
  }
}
</style>
