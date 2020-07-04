<template>
  <div class="echarts-demo-menu" :class="{ column: vertical }">
    <template v-for="item in data">
      <router-link class="item" :style="itemStyle" :key="item.id" :to="item.path">
        <img :src="item.img" alt="" @click="event">
      </router-link>
    </template>
  </div>
</template>

<script>
// 生成唯一字符串
function uuid() {
  return [
    Math.random().toString(16).slice(2),
    new Date().getTime().toString(16),
    Math.random().toString(16).slice(2),
  ].join('').slice(1, 32)
}

export default {
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    itemWidth: {
      type: String,
      default: '240px'
    },
    itemHeight: {
      type: String,
      default: '160px'
    }
  },
  computed: {
    itemStyle() {
      return {
        width: this.itemWidth,
        height: this.itemHeight
      }
    }
  },
  data() {
    return {
      data: [
        { id: uuid(), name: '全中国销售额', path: '/echarts/map-01', img: require('@/assets/image/map-01.png') }
      ]
    }
  },
  methods: {
    event(e) {
      this.$emit('custom-event', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts-demo-menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  &.column {
    flex-direction: column;
    align-content: flex-start;
  }
  &>.item {
    display: block;
    margin: 10px;
    position: relative;
  }
}
</style>
