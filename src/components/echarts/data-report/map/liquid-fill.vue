<template>
  <ve-liquidfill :data="data" :settings="settings" height="100%"></ve-liquidfill>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'name'
    },
    value: {
      type: Number,
      default: 0.50
    }
  },
  computed: {
    data() {
      return {
        columns: ['key', 'value'],
        rows: [{
          'key': this.name,
          value: this.value
        }]
      }
    },
    settings() {
      return {
        seriesMap: {
          [this.name]: {
            radius: '75%',
            amplitude: 10,
            waveLenght: '33%',
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 1,
                borderColor: '#5FB878',
                shadowBlur: 0,
                color: 'none'
              }
            },
            backgroundStyle: {
              color: '#FFF'
            },
            itemStyle: {
              opacity: 0.5,
              shadowBlur: 0
            },
            label: {
              color: '#5FB878',
              insideColor: '#5FB878'
            },
            color: ['#1E9FFF']
          }
        }
      }
    }
  },
}
</script>

<style>
</style>
