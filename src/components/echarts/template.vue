<template>
  <div class="map">
    <template v-if="vct">
      <v-chart :options="option"></v-chart>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    <github v-if="github" :path="path"></github>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default() {
        return {}
      }
    },
    github: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    path() {
      return this.url || `${this.$route.path}.vue`
    },
    vct() {
      return Object.keys(this.option).length
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
