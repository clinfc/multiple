<template>
  <e-tpe github url="/echarts/bmap.vue">
    <my-map></my-map>
  </e-tpe>
</template>

<script>
import ETpe from '../../mixins/echarts-template.js'
import MyMap from '@/components/visual/basics/map/left.vue'
export default {
  mixins: [ETpe],
  components: {
    MyMap
  }
}
</script>

