<template>
  <div class="map">
    <!-- 百度地图 -->
    <template v-if="vct && bmap">
      <zc-bmap-es :options="option"></zc-bmap-es>
    </template>
    <!-- vue-charts -->
    <template v-else-if="vct">
      <v-chart :options="option"></v-chart>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    <github v-if="github" :path="path"></github>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default() {
        return {}
      }
    },
    // 是否显示 GitHub 导航
    github: {
      type: Boolean,
      default: false
    },
    // 自定义的 GitHub 链接
    url: {
      type: String,
      default: ''
    },
    // 渲染为 bmap
    bmap: {
      type: Boolean,
      default: false
    }
  },
  components: {
    // 自己封装的 bmap
    'zc-bmap-es': () => import('../bmap-echarts.vue')
  },
  computed: {
    // 动态生成 GitHub 链接
    path() {
      return this.url || `${this.$route.path}.vue`
    },
    // 是否进行默认 echarts 渲染（用户未传入 option 配置项时将不渲染）
    vct() {
      return Object.keys(this.option).length
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
