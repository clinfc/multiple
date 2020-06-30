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
      txt: '',
      drawer: false,
      option: {}
    }
  },
  created() {
    let id = this.$route.params.id
    this.$axios.get(`/options/detail/${id}`).then(res => {
      let option = res.data.content
      this.txt = `\`\`\`js \nlet option = ${option}\n\`\`\``
      this.option = Function(`return ${option}`)()
    })
  }
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
