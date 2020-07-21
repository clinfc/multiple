<template>
  <div class="svg-demo">
    <svg-loading></svg-loading>
    <svg-fly-box></svg-fly-box>
  </div>
</template>

<script>
import SvgLoading from '@/components/svg/demo/loading.vue'
import SvgFlyBox from '@/components/svg/demo/fly-box.vue'
export default {
  components: {
    SvgLoading,
    SvgFlyBox
  }
}
</script>

<style scoped>
.svg-demo {
  width: 1200px;
  margin: auto;
}
</style>
