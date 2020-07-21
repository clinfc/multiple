<template>
  <svg-btpe span="16 8" title="stroke-dasharray" :after="this.after">
    <svg width="350" height="300" viewBox="0 0 100 50">
      <circle cx="50" cy="25" r="20" stroke="#e5e5e5" stroke-width="3" fill="none"></circle>
      <circle class="progress" cx="50" cy="25" r="20" stroke="#5fb878" stroke-width="3" fill="none"></circle>
    </svg>
  </svg-btpe>
</template>

<script>
import Template from './../template-mixin.js'
export default {
  mixins: [Template],
  data() {
    return {
      after: `<style scoped>
  .progress {
    animation: progress 2s linear infinite;
  }
  @keyframes progress{
    from{
      stroke-dasharray: 0 126;
    }
    to{
      stroke-dasharray: 126 0;
    }
  }
</style>`
    }
  }
}
</script>

<style scoped>
.progress {
  animation: progress 2s linear infinite;
}
@keyframes progress{
  from{
    stroke-dasharray: 0 126;
  }
  to{
    stroke-dasharray: 126 0;
  }
}
</style>
