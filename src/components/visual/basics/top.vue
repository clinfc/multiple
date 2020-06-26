<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card>
        <total-sales></total-sales>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <total-order></total-order>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <today-user></today-user>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <total-user></total-user>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import TotalSales from './top/total-sales.vue'
import TotalOrder from './top/total-order.vue'
import TotalUser from './top/total-user.vue'
import TodayUser from './top/today-user.vue'

export default {
  components: {
    TotalSales,
    TotalOrder,
    TotalUser,
    TodayUser
  }
}
</script>

<style lang="scss">
.top-line {
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;

  .emphasize {
    color: #333;
    font-weight: 700;
    padding: 0 7px;
  }
}
</style>
