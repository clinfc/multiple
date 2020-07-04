<template>
  <toolbox direction="br">
    <a :href="href" target="_blank">
      <i class="iconfont icon-GitHub"></i>
    </a>
  </toolbox>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'views'
    }
  },
  computed: {
    href() {
      return `https://github.com/clinfc/multiple/src/${name}/${this.path.replace(/^\//, '')}`
    }
  }
}
</script>

<style scoped>
.iconfont {
  font-size: 22px;
}
</style>
