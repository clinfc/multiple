<template>
  <svg-btpe span="16 8" :wrap="100" title="SMIL animate">
    <svg viewBox="0 0 350 100" width="350" height="100" class="svg-btpe">
      <rect x="0" y="25" width="50" height="50" fill="#5fb878">
        <!-- repeatCount 属性控制动画的次数 -->
        <animate attributeName="x" attributeType="XML" from="0" to="350"  dur="5s" repeatCount="indefinite" />
      </rect>
    </svg>
    <svg viewBox="0 0 350 100" width="350" height="100" class="svg-btpe">
      <rect x="0" y="25" width="50" height="50" fill="#5fb878">
        <!-- fill="freeze" 表示动画结束后保持动画最终的效果 -->
        <animate attributeName="x" attributeType="XML" from="0" to="300"  dur="3s" repeatCount="1" fill="freeze" />
      </rect>
    </svg>
    <svg viewBox="0 0 350 100" width="350" height="100" class="svg-btpe">
      <rect x="0" y="25" width="50" height="50" fill="#5fb878">
        <!-- fill="remove" 表示动画结束后恢复最初状态 -->
        <animate attributeName="x" attributeType="XML" from="0" to="300"  dur="3s" repeatCount="1" fill="remove" />
      </rect>
    </svg>
    <svg viewBox="0 0 350 100" width="350" height="100" class="svg-btpe">
      <rect x="0" y="0" width="50" height="50" fill="#5fb878">
        <animateTransform attributeName="transform" type="scale" from="1" to="2" begin="0s" dur="3s" repeatCount="indefinite" fill="freeze" />
      </rect>
      <rect x="55" y="0" width="50" height="50" fill="#5fb878">
        <!-- 放大时，rect 的所有属性都将放大到原来的两倍 -->
        <animateTransform attributeName="transform" type="scale" from="1" to="2" begin="0s" dur="3s" repeatCount="1" fill="freeze" />
      </rect>
    </svg>
  </svg-btpe>
</template>

<script>
import Template from './../template-mixin.js'
export default {
  mixins: [Template]
}
</script>

<style>
.svg-btpe {
  border: 1px solid #d8d8d8;
}
</style>
