<template>
  <el-row :gutter="20" class="bottom">
    <el-col :span="12">
      <bot-keyword></bot-keyword>
    </el-col>
    <el-col :span="12">
      <bot-ranking></bot-ranking>
    </el-col>
  </el-row>
</template>

<script>
import BotKeyword from './bottom/keyword.vue'
import BotRanking from './bottom/ranking.vue'
export default {
  components: {
    BotKeyword,
    BotRanking
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  margin: 20px 0 0 0;
}
</style>
