<template>
  <div class="map">
    <v-chart :options="option"></v-chart>
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap'
export default {
  data() {
    return {
      option: {
        bmap: {
          key: 'kGNFvzccNhXtVfwGDi5iIQZtACfiViEB',
          center: [116.46, 39.92],
          zoom: 10,
          roam: true
        }
      }
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
