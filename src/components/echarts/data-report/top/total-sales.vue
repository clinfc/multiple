<template>
  <top-common title="累计销售额" value="￥ 2,547,983">
    
    <div class="comparison">
      <div class="top-line">
        <span>日同比</span>
        <span class="emphasize">9.25%</span>
        <span class="increase"></span>
      </div>
      <div class="top-line">
        <span>日同比</span>
        <span class="emphasize">9.25%</span>
        <span class="decrease"></span>
      </div>
    </div>
    
    <div class="top-line" slot="bot">
      <span>昨日销售额</span>
      <span class="emphasize">￥ 30,000,000</span>
    </div>
  </top-common>
</template>

<script>
import TopMixin from './mixin.js'
export default {
  mixins: [TopMixin]
}
</script>

<style lang="scss" scoped>
.comparison {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  .top-line:nth-child(1) {
    padding-bottom: 5px;
  }
}
</style>
