<template>
  <div class="toolbox" :class="style">
    <router-link to="/" title="首页" v-if="home">
      <i class="el-icon-s-home"></i>
    </router-link>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // 是否显示 “首页” 按钮
    home: {
      type: Boolean,
      default: false
    },
    // 位置、方向
    direction: {
      type: String,
      default: 'r'
    },
    // 内容是否竖向布列
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      let dir = ['t', 'r', 'b', 'l', 'tr', 'tl', 'br', 'bl'].includes(this.direction) ? this.direction : 'r'
      return {
        [dir]: true,
        vertical: this.vertical
      }
    }
  }
}
</script>

<style lang="scss">
.toolbox {
  position: fixed;
  box-shadow: 0 0 10px 0 #999;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  &.vertical {
    flex-direction: column;
  }
  &.t {
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
  }
  &.r {
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
  }
  &.l {
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
  &.b {
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }
  &.tl {
    top: 25px;
    left: 25px;
  }
  &.tr {
    top: 25px;
    right: 25px;
  }
  &.bl {
    bottom: 25px;
    left: 25px;
  }
  &.br {
    bottom: 25px;
    right: 25px;
  }
  &>* {
    flex-shrink: 0;
    display: block;
    width: 26px;
    height: 26px;
    line-height: 26px;
    padding: 16px;
    text-align: center;
    font-size: 22px;
    color: #b5b9bc;
    cursor: pointer;
  }
}
</style>
