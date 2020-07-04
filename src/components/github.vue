<template>
  <toolbox direction="br" :home="home" vertical>
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
    home: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    href() {
      return `https://github.com/clinfc/multiple/blob/dev/src/views/${this.path.replace(/^\//, '')}`
    }
  }
}
</script>

<style scoped>
.iconfont {
  font-size: 22px;
}
</style>
