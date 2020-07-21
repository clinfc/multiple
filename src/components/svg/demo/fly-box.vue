<template>
  <svg-btpe span="16 8" title="fly-box">
    <svg :width="width" :height="height" :viewBox="viewBox" style="background-color: #999;">
      <defs>
        <path id="fly-box" :d="boxPath" fill="none"></path>
        <linearGradient id="linear" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0.25" stop-color="#82A6F5"></stop>
          <stop offset="0.5" stop-color="#F6D6FF"></stop>
          <stop offset="0.75" stop-color="#F3D7B5"></stop>
          <stop offset="1" stop-color="#C7B3E5"></stop>
        </linearGradient>
        <radialGradient id="radial" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
          <stop offset="0" stop-color="#FFFFFF" stop-opacity="1"></stop>
          <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"></stop>
        </radialGradient>
        <mask id="dazzle-light">
          <polygon :points="points" fill="url(#radial)">
            <animateMotion :path="animatePath" dur="3s" rotate="0" repeatCount="indefinite"></animateMotion>
          </polygon>
        </mask>
      </defs>
      <!-- <use href="#fly-box" stroke="#e5e5e5" :stroke-width="strokeWidth"></use> -->
      <use href="#fly-box" stroke="url(#linear)" :stroke-width="strokeWidth" mask="url(#dazzle-light)"></use>
    </svg>
  </svg-btpe>
</template>

<script>
import Template from './../template-mixin.js'
export default {
  mixins: [Template],
  data() {
    return {
      // 视图的宽
      width: 350,
      // 视图的高
      height: 350,
      // 运动框距视框的距离
      padding: 15,
      // 飞线的半径
      length: 100,
      // 运动框路径的宽度
      strokeWidth: 3,
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`
    },
    points() {
      return [0, -this.length, this.length, 0, 0, this.length, -this.length, 0].join(' ')
    },
    boxPath() {
      let M = [ this.padding, this.padding ]
      let L = [
        this.width - this.padding,
        this.padding,
        this.width - this.padding,
        this.height - this.padding,
        this.padding,
        this.height - this.padding
      ]
      return `M${M.join(' ')} L${L.join(' ')} Z`
    },
    animatePath() {
      let M = [ this.padding, this.padding ]
      let L = [
        this.width - this.padding,
        this.padding,
        this.width - this.padding,
        this.height - this.padding,
        this.padding,
        this.height - this.padding
      ]
      return `M${M.join(' ')} L${L.join(' ')} Z`
    }
  }
}
</script>
