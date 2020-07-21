<template>
  <svg-btpe span="16 8" title="stroke-dasharray">
    <svg width="350" height="175" viewBox="0 0 100 50">
      <circle cx="50" cy="25" r="20" stroke="#e5e5e5" stroke-width="3" fill="none"></circle>
      <circle cx="50" cy="25" r="20" stroke="#5fb878" stroke-width="3" :stroke-dasharray="dasharray" fill="none"></circle>
    </svg>
  </svg-btpe>
</template>

<script>
import Template from './../template-mixin.js'
export default {
  mixins: [Template],
  data() {
    return {
      perimeter: 126,
      per: 0,
      timer: null
    }
  },
  created() {
    let update = () => {
      this.per = this.per > 100 ? 0 : ++this.per
      requestAnimationFrame(update)
    }
    update()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  computed: {
    dasharray() {
      let len = parseInt(this.per * this.perimeter / 100)
      return `${len} ${this.perimeter - len}`
    }
  }
}
</script>
