<template>
  <div class="echarts-demo-menu" :class="{ column: vertical }">
    <template v-for="item in data">
      <router-link class="item" :style="itemStyle" :key="item.id" :to="item.path">
        <img :src="item.img" alt="">
        <div class="title" @click="event">{{item.title}}</div>
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

const temp = [
  {
    title: '地理区域数据可视化',
    name: 'map-01',
    type: ['map'],
    tag: ['visualMap']
  },
  {
    title: '百度地图可视化',
    name: 'bmap-01',
    type: ['bmap', 'scatter', 'effectScatter'],
    tag: ['bmap', 'coordinateSystem']
  },
  {
    title: '多图示例',
    name: 'mixture-01',
    type: ['pie', 'bar'],
    tag: ['dataset', 'axis', 'tooltip', 'clockwise', 'formatter', 'axisTick']
  },
  {
    title: 'legend 示例',
    name: 'legend-01',
    type: ['pie', 'line', 'bar'],
    tag: ['dataset', 'legend', 'encode']
  },
  {
    title: '双轴 + 双坐标系',
    name: 'partition-01',
    type: ['line', 'bar'],
    tag: ['grid', 'gridIndex', 'axis', 'xAxisIndex', 'yAxisIndex', 'dataset', 'seriesLayoutBy']
  },
  {
    title: '多 legend + 工具箱',
    name: 'tool-01',
    type: ['pie', 'line', 'bar'],
    tag: ['toolbox', 'legend', 'encode', 'dataZoom']
  }
]

const data = temp.map(item => {
  return {
    ...item,
    id: uuid(),
    path: `/echarts/${item.name}`,
    img: require(`@/assets/image/${item.name}.png`)
  }
})

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
      data: data
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
    box-shadow: 0 0 10px 0 #909399;
    &>.title {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba($color: #000000, $alpha: .5);
      top: 0;
      left: 0;
      color: #FFFFFF;
      font-size: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      transform: rotateX(90deg);
      opacity: 0;
      transition: transform .5s ease, opacity .5s ease;
    }
    &:hover {
      box-shadow: 0 0 15px 3px #909399;
      &>.title {
        transform: rotateX(0deg);
        opacity: 1;
      }
    }
  }
}
</style>
