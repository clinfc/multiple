<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <map-left></map-left>
    </el-col>
    <el-col :span="6" class="map-right">
      <el-card :body-style="bodyStyle">
        <template slot="header">用户月同比增长</template>
        <map-liquid-fill></map-liquid-fill>
      </el-card>
      <el-card :body-style="bodyStyle">
        <template slot="header">热门搜索</template>
        <map-word-cloud :rows="rows"></map-word-cloud>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import MapLeft from './map/left.vue'
import MapLiquidFill from './map/liquid-fill.vue'
import MapWordCloud from './map/word-cloud.vue'

export default {
  components: {
    MapLeft,
    MapLiquidFill,
    MapWordCloud
  },
  data() {
    return {
      bodyStyle: {
        padding: '20px 0',
        margin: '0 20px',
        'box-sizing': 'border-box',
        height: '230px'
      },
      rows: [
        { name: 'HTML', value: parseInt(Math.random()*250) },
        { name: 'CSS', value: parseInt(Math.random()*250) },
        { name: 'JavaScript', value: parseInt(Math.random()*250) },
        { name: 'TypeScript', value: parseInt(Math.random()*250) },
        { name: 'ES6', value: parseInt(Math.random()*250) },
        { name: 'Vue', value: parseInt(Math.random()*250) },
        { name: 'React', value: parseInt(Math.random()*250) },
        { name: 'Angular', value: parseInt(Math.random()*250) },
        { name: 'sass/scss', value: parseInt(Math.random()*250) },
        { name: 'less', value: parseInt(Math.random()*250) }
      ]
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
.el-col {
  height: 600px;
}
.map-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
