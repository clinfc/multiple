<template>
  <svg-btpe span="16 8" :wrap="100" title="SMIL set">
    <svg viewBox="0 0 350 100" width="350" height="100">
      <rect x="0" y="0" width="100" height="100" fill="#5fb878">
        <!-- 实现属性的延迟设置 -->
        <set attributeName="x" attributeType="XML" from="0" to="125" begin="2s"></set>
        <set attributeName="ry" attributeType="XML" from="0" to="50" begin="4s"></set>
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
