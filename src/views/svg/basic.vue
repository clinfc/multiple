<template>
  <div class="svg-basic">
    <svg-progress1></svg-progress1>
    <svg-progress2></svg-progress2>
    <svg-outline></svg-outline>
    <svg-smil-set></svg-smil-set>
    <svg-smil-animate></svg-smil-animate>
    <svg-smil-animate-motion></svg-smil-animate-motion>
    <svg-smil-animate-motion2></svg-smil-animate-motion2>
  </div>
</template>

<script>
import SvgProgress1 from '@/components/svg/basic/progress-01.vue'
import SvgProgress2 from '@/components/svg/basic/progress-02.vue'
import SvgOutline from '@/components/svg/basic/outline.vue'
import SvgSmilSet from '@/components/svg/basic/smil-set.vue'
import SvgSmilAnimate from '@/components/svg/basic/smil-animate.vue'
import SvgSmilAnimateMotion from '@/components/svg/basic/smil-animate-motion.vue'
import SvgSmilAnimateMotion2 from '@/components/svg/basic/smil-animate-motion2.vue'
export default {
  components: {
    SvgProgress1,
    SvgProgress2,
    SvgOutline,
    SvgSmilSet,
    SvgSmilAnimate,
    SvgSmilAnimateMotion,
    SvgSmilAnimateMotion2,
  }
}
</script>

<style scoped>
.svg-basic {
  width: 1200px;
  margin: auto;
}
</style>
