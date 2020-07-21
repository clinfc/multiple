<template>
  <el-card :body-style="{padding: 0}">
    <template v-if="title" slot="header">{{title}}</template>
    <el-row :gutter="20" :style="{height: height ? `${height}px` : 'auto'}">
      <el-col :span="elspan[0]" style="border-right: 1px solid #999999;">
        <md-code :txt="txt"></md-code>
      </el-col>
      <el-col :span="elspan[1]">
        <div :id="id">
          <slot></slot>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { html as beautify } from 'js-beautify'
import MObserver from 'm-observer'

import MdCode from '@/components/markdown-code.vue'

export default {
  components: {
    MdCode
  },
  props: {
    span: {
      type: String,
      default: '12,12'
    },
    // 限制高度
    height: {
      type: Number,
      default: 0
    },
    // 自定义显示的代码。添加在 slot 代码之前
    before: {
      type: String,
      default: ''
    },
    // 自定义显示的代码。添加在 slot 代码之后
    after: {
      type: String,
      default: ''
    },
    // 单行最大代码长度，达到这个值将会换行
    wrap: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: '',
      html: ''
    }
  },
  computed: {
    txt() {
      let temp = [this.html]
      if (this.before) {
        temp.unshift(this.before)
      }
      if (this.after) {
        temp.push(this.after)
      }
      return `\`\`\`html\n${temp.join('\n')}\n\`\`\``
    },
    elspan() {
      let [l, r] = this.span.match(/(\d+)/g).map(v => (parseInt(v) || 12))
      l = l || 12
      r = r || 24 - l
      return [l, r]
    }
  },
  created() {
    this.id = this.$uuid()
    this.$nextTick(() => {
      let option = {
        indent_size: 2,
        wrap_line_length: this.wrap,
      }
      let el = document.getElementById(this.id)
      this.html = beautify(el.innerHTML, option)
      MObserver.attributeChild(el, (list) => {
        this.html = beautify(el.innerHTML, option)
      })
    })
  }
}
</script>

<style scoped lang="scss">
.el-card {
  box-shadow: 0 0 5px 0 #999999;
  margin: 10px 0 30px;
}
</style>
