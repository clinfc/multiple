<template>
  <div class="menus">
    <echarts-menu></echarts-menu>
  </div>
</template>

<script>
import EchartsMenu from '@/components/echarts/menu.vue'

export default {
  components: {
    EchartsMenu
  }
}
</script>

<style scoped>
.menus {
  width: 1300px;
  margin: auto;
  padding: 10px 0;
}
</style>
