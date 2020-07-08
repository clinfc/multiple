<template>
  <div class="menu-body">
    <div class="filter" v-if="vertical">
      <el-radio-group v-model="radio" @change="change">
        <el-radio label="0">全部</el-radio>
        <el-radio label="1">图例</el-radio>
        <el-radio label="2">配置项</el-radio>
      </el-radio-group>
      <div class="filter-tag">
        <el-input v-model="tag" size="small"></el-input>
        <div class="tags" @click="tagCheck">
          <template v-for="item in ftag">
            <code :class="tagChecked(item)" :key="item">{{item}}</code>
          </template>
        </div>
      </div>
    </div>
    <div class="echarts-demo-menu scoll" :class="{ column: vertical }">
      <template v-for="item in routeData">
        <template v-if="vertical">
          <el-popover :key="item.id" placement="left-start" width="240" trigger="hover">
            <router-link slot="reference" class="item" :style="itemStyle" :to="item.path">
              <img :src="item.img" alt="">
              <div class="title" @click="event">{{item.title}}</div>
            </router-link>
            <!-- popover 提示框的内容 -->
            <div class="pop-content" @click="tagCheck">
              <div class="title">图例</div>
              <div class="tags">
                <template v-for="tag in item.type">
                  <code :class="tagChecked(tag)" data-radio="1" :key="tag">{{tag}}</code>
                </template>
              </div>
              <div class="title">配置项</div>
              <div class="tags">
                <template v-for="tag in item.tag">
                  <code :class="tagChecked(tag)" data-radio="2" :key="tag">{{tag}}</code>
                </template>
              </div>
            </div>
          </el-popover>
        </template>
        <template v-else>
          <router-link slot="reference" class="item" :key="item.id" :style="itemStyle" :to="item.path">
            <img :src="item.img" alt="">
            <div class="title" @click="event">{{item.title}}</div>
          </router-link>
        </template>
      </template>
    </div>
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
    title: '地理区域可视化',
    name: 'map-01',
    type: ['map'],
    tag: ['visualMap']
  },
  {
    title: '地理航线可视化',
    name: 'map-02',
    type: ['lines', 'effectScatter', 'map'],
    tag: ['geo', 'effect', 'rippleEffect']
  },
  {
    title: '地理航线可视化',
    name: 'map-03',
    type: ['lines', 'effectScatter', 'map', 'bar'],
    tag: ['geo', 'effect', 'rippleEffect', 'visualMap', 'axis']
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

const type = [...new Set([].concat(...temp.map(item => item.type)))]
const tags = [...new Set([].concat(...temp.map(item => item.tag)))]
const all = [...new Set([].concat(type, tags))]

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
    },
    disabled() {
      return this.radio === 'all'
    },
    ftag() {
      return [
        this.all,
        this.type,
        this.tags
      ][this.radio] || this.all
    },
    routeData() {
      switch(this.radio) {
        case "1":
          return this.tag ? this.data.filter(row => row.type.includes(this.tag)) : this.data
        case "2":
          return this.tag ? this.data.filter(row => row.tag.includes(this.tag)) : this.data
        case "0":
        default:
          return this.tag ? this.data.filter(({type, tag}) => (type.includes(this.tag) || tag.includes(this.tag))) : this.data
      }
    }
  },
  data() {
    return {
      // 筛选条件
      radio: '0',
      // 二级筛选条件：当前选择的标签
      tag: '',
      data: data,
      // 图例与配置项标签的集合
      all: all,
      // 所有图例
      type: type,
      // 所有配置项标签
      tags: tags
    }
  },
  methods: {
    event(e) {
      this.$emit('custom-event', e)
    },
    change() {
      this.tag = ''
    },
    // 事件绑定，点击 code 时更新数据
    tagCheck({target}) {
      let radio = target.dataset.radio
      if (radio) {
        this.radio = radio
      }
      if (target.nodeName === 'CODE') {
        this.tag = target.textContent
      }
    },
    // 生成样式的，当前 code 是否被选择
    tagChecked(value) {
      return {
        'is-checked': this.tag == value
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.menu-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}
.filter {
  flex: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #CCCCCC;
  .el-radio-group {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    .el-radio {
      flex-grow: 0;
      flex-shrink: 0;
      width: 70px;
      margin: 0;
      display: flex;
      justify-content: center;
      padding-bottom: 5px;
      border-bottom: 2px solid transparent;
      &.is-checked {
        border-bottom-color: #409EFF;
      }
    }
  }
  .filter-tag {
    width: 95%;
    height: 32px;
    position: relative;
    margin-top: 5px;
    .tags {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 32px;
      background-color: #FFFFFF;
      overflow: hidden;
      border: 1px solid transparent;
      border-radius: 5px;
      z-index: 10;
      &:hover {
        height: auto;
        border-color: rgba(153, 153, 153, 0.5);
        box-shadow: 0 0 10px 0 rgb(153, 153, 153);
      }
    }
  }
}
.echarts-demo-menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  &.column {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    padding-top: 5px;
    /*滚动条整体样式*/
    &::-webkit-scrollbar {
      width: 2px;
      height: 1px;
    }
    /*滚动条滑块*/
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: #CCCCCC;
    }
    /*滚动条轨道*/
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
      border-radius: 2px;
      background: #e5e5e5;
    }
  }
  .item {
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
      .title {
        transform: rotateX(0deg);
        opacity: 1;
      }
    }
  }
}
.el-popover {
  .pop-content {
    &>.title {
      color: #303133;
      font-size: 16px;
      line-height: 1;
      margin-bottom: 12px;
      font-weight: bold;
    }
    &>.tags {
      margin-bottom: 12px;
    }
  }
}
.tags {
  display: flex;
  flex-wrap: wrap;
  code {
    color: #999;
    margin: 5px;
    display: inline-block;
    padding: 3px 7px;
    font-size: 14px;
    border: 1px solid rgba(153, 153, 153, 0.48);
    border-radius: 5px;
    cursor: pointer;
    order: 1;
    &.is-checked {
      color: #5FB878;
      border-color: #5FB878;
      background-color: rgba(95, 184, 120, 0.1);
      order: 0;
    }
  }
}
</style>
