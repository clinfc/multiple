<template>
  <div class="basics">
    <basics-top></basics-top>
    <basics-sales></basics-sales>
    <basics-bottom></basics-bottom>
    <!-- <basics-map></basics-map> -->
    <toolbox home qq vertical></toolbox>
  </div>
</template>

<script>
import BasicsTop from '@/components/echarts/data-report/top'
import BasicsSales from '@/components/echarts/data-report/sales'
import BasicsBottom from '@/components/echarts/data-report/bottom'
// import BasicsMap from '@/components/echarts/data-report/map'

export default {
  name: 'vb',
  components: {
    BasicsTop,
    BasicsSales,
    // BasicsMap,
    BasicsBottom
  }
}
</script>

<style scoped>
.basics {
  padding: 20px;
}
</style>
