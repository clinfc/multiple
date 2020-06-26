<template>
  <ve-wordcloud :data="data" :settings="settings" height="100%"></ve-wordcloud>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    data() {
      return {
        columns: ['name', 'value'],
        rows: this.rows
      }
    },
    settings() {
      return {
        color: ['#009688', '#5FB878', '#393D49', '#1E9FFF', '#FFB800', '#FF5722', '#2F4056', '#C2C2C2', '#D2D2D2', '#E2E2E2'],

      }
    }
  }
}
</script>

<style>
</style>
