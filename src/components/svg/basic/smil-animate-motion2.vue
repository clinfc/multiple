<template>
  <svg-btpe span="16 8" :wrap="100" title="SMIL animateMotion">
    <svg viewBox="0 0 350 150" width="350" height="150" class="svg-btpe">
      <rect x="0" y="0" width="10" height="10" fill="#5fb878">
        <animateMotion
          id="to-destination"
          path="M10,10L330,10L330,130L10,130"
          dur="5s"
          rotate="0"
          begin="0; to-origin.end + 0s"
        />
        <!--
          begin: 调用上一个动画ID的结束处，然后必须加上 0s，否则不能连续动画
        -->
        <animateMotion
          id="to-origin"
          path="M10,130L330,130L330,10L10,10"
          dur="5s"
          rotate="0"
          begin="to-destination.end + 0s"
        />
      </rect>
      <path d="M10,10L330,10L330,130L10,130" fill="none" stroke="blue" stroke-width="1"></path>
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
