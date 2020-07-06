<template>
  <div class="toolbox" :class="style">
    <router-link class="item" to="/" title="首页" v-if="home">
      <i class="el-icon-s-home"></i>
    </router-link>
    <slot></slot>
    <div class="qr-code" v-if="qq">
      <i class="iconfont icon-QQ1"></i>
      <el-image :src="qqQrCode"></el-image>
    </div>
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
    // 显示 QQ
    qq: {
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
  },
  data() {
    return {
      qqQrCode: 'data:image/png;base64,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',
      wxQrCode: ''
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
  .iconfont {
    font-size: 22px;
  }
  .qr-code {
    position: relative;
    .el-image {
      width: 100px;
      height: 100px;
      padding: 10px;
      box-shadow: 0 0 5px 0 #999;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      position: absolute;
      left: -130px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }
    &:hover {
      .el-image {
        display: inline-block;
      }
    }
  }
}
</style>
