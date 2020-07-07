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
      script: [
        { src: `https://api.map.baidu.com/api?v=2.0&ak=kGNFvzccNhXtVfwGDi5iIQZtACfiViEB`, state: false, dom: null },
        { src: `http://api.map.baidu.com/getscript?v=2.0&ak=kGNFvzccNhXtVfwGDi5iIQZtACfiViEB`, state: false, dom: null }
      ]
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
  methods: {
    // 判断是否需要加载百度 API
    need(row) {
      if (document.querySelectorAll(`script[src='${row.src}']`).length) {
        row.state = true
        return false
      }
      return true
    },
    // 加载百度 API
    loadScript(row) {
      if (this.need(row)) {
        let script = document.createElement('script')
        script.charset = 'UTF-8'
        script.type = 'text/javascript'
        script.src = row.src
        script.addEventListener('load', () => {
          row.state = true
          row.dom = script
        })
        document.head.appendChild(script)
      }
    }
  },
  created() {
    this.script.forEach(row => {
      this.loadScript(row)
    })
  },
  destroyed() {
    // 卸载
    this.script.forEach(row => {
      if (row.state && row.dom) {
        document.head.removeChild(row.dom)
      }
      row.state = false
      row.dom = null
    })
  }
}
</script>

<style>
</style>
