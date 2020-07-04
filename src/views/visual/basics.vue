<template>
  <div class="basics">
    <basics-top></basics-top>
    <basics-sales></basics-sales>
    <basics-bottom></basics-bottom>
    <basics-map></basics-map>
  </div>
</template>

<script>
import BasicsTop from '@/components/visual/basics/top'
import BasicsSales from '@/components/visual/basics/sales'
import BasicsMap from '@/components/visual/basics/map'
import BasicsBottom from '@/components/visual/basics/bottom'

export default {
  name: 'vb',
  components: {
    BasicsTop,
    BasicsSales,
    BasicsMap,
    BasicsBottom
  }
}
</script>

<style scoped>
.basics {
  padding: 20px;
}
</style>
