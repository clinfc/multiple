<template>
  <v-chart v-if="loaded" :options="options"></v-chart>
</template>

<script>
import 'echarts/extension/bmap/bmap'
export default {
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      // 两个 script 是否都加载完毕，只有都加载完毕后才进行数据渲染
      loaded: false,
    }
  },
  watch: {
    script: {
      handler(script) {
        if (script.every(row => row.state)) {
          this.loaded = true
        }
      },
      deep: true
    }
  },
  created() {
    this.$loadScriptByName(['bmap-api', 'bmap-getscript'], () => {
      this.loaded = true
    })
  }
}
</script>

<style>
</style>
