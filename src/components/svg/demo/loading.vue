<template>
  <svg-btpe span="16 8" title="loading">
    <svg width="350" height="350" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="#C7B3E5"
        stroke-width="5"
        stroke-dasharray="62"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#C7B3E5;#EFCEE8;#C7B3E5"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="#EFCEE8"
        stroke-width="5"
        stroke-dasharray="39"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 50 50; 0 50 50"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#EFCEE8;#C7B3E5;#EFCEE8"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </svg-btpe>
</template>

<script>
import Template from './../template-mixin.js'
export default {
  mixins: [Template]
}
</script>
