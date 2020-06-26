<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <mk-code :txt="txt"></mk-code>
    </el-col>
    <el-col :span="16">
      <div :style="box">
        <div v-for="i in 6" :key="i" :style="item">{{i}}</div>
      </div>
      <el-button class="flex-edit" type="primary" icon="el-icon-edit-outline" circle @click="drawer = true"></el-button>
      <el-drawer :visible.sync="drawer" direction="btt" size="500" :with-header="false">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="w450">
              <div slot="header">父元素样式：.box</div>
              <el-form  label-width="120px" :model="box">
                <el-form-item v-for="row in boxs" :label="row.key" :key="row.key">
                  <el-select v-model="box[row.key]">
                    <el-option v-for="option in row.values" :key="option.value" :value="option.value"></el-option>
                  </el-select>
                  <explain class="explain-panel" :data="row" :selected="box[row.key]"></explain>
                </el-form-item>
                <el-form-item label="height">
                  <el-slider v-model="height" :step="50" :max="500" class="w217"></el-slider>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="w450">
              <div slot="header">子元素公共样式：.item</div>
              <el-form label-width="120px" :model="item">
                <el-form-item label="flex-grow">
                  <el-input type="number" min="0" v-model="item['flex-grow']" class="w217"></el-input>
                  <explain class="explain-panel" :data="flexGrow" :selected="item['flex-grow']"></explain>
                </el-form-item>
                <el-form-item label="flex-shrink">
                  <el-input type="number" min="0" v-model="item['flex-shrink']"  class="w217"></el-input>
                  <explain class="explain-panel" :data="flexShrink" :selected="item['flex-shrink']"></explain>
                </el-form-item>
                <el-form-item label="flex-basis">
                  <el-autocomplete v-model="item['flex-basis']" :fetch-suggestions="querySearch" clearable></el-autocomplete>
                  <explain class="explain-panel" :data="flexBasis" :selected="item['flex-basis']"></explain>
                </el-form-item>
                <el-form-item label="align-self">
                  <el-select v-model="item['align-self']">
                    <el-option v-for="option in alignSelf.values" :key="option.value" :value="option.value"></el-option>
                  </el-select>
                  <explain class="explain-panel" :data="alignSelf" :selected="item['align-self']"></explain>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
          <el-col :span="8">1</el-col>
        </el-row>
      </el-drawer>
    </el-col>
  </el-row>
</template>

<script>
import MkCode from '@/components/markdown-code.vue'
import Explain from '@/components/css/flex/explain.vue'
export default {
  components: {
    MkCode,
    Explain
  },
  data() {
    return {
      drawer: false,
      height: 200,
      box: {
        "border": "1px solid #909399",
        "background-color": "green",
        "height": "200px",

        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "justify-content": "flex-start",
        "align-items": "stretch",
        "align-content": "stretch",
      },
      item: {
        "width": "22.5%",
        "height": "100px",
        "box-sizing": "border-box",
        "border": "1px solid #909399",
        "border-radius": "0 20% 0 0",
        "background-color": "yellow",

        "flex-grow": "0",
        "flex-shrink": "1",
        "flex-basis": "auto",
        "align-self": "auto",
      }
    }
  },
  watch: {
    height(val) {
      this.box.height = `${val}px`
    },
    box(val) {
      console.log(val);
      this.updateTxt()
    },
    item() {
      this.updateTxt()
    }
  },
  computed: {
    boxs() {
      return this.$store.state.flex.box
    },
    items() {
      return this.$store.state.flex.item
    },
    flexGrow() {
      return this.items.filter(row => row.key == 'flex-grow')[0]
    },
    flexShrink() {
      return this.items.filter(row => row.key == 'flex-shrink')[0]
    },
    flexBasis() {
      return this.items.filter(row => row.key == 'flex-basis')[0]
    },
    alignSelf() {
      return this.items.filter(row => row.key == 'align-self')[0]
    },
    txt() {
      return this.objToString({
        box: this.box,
        item: this.item
      })
    }
  },
  methods: {
    // 将 class 样式对象转换成 markdown 文档
    objToString(data) {
      let css = Object.entries(data).map(([key, value]) => {
        let str = Object.entries(value).map(([k, v]) => `  ${k}: ${v};`).join('\n')
        return `\n.${key} {\n${str}\n}`
      }).join('\n')
      return `\`\`\`css${css}\n\`\`\``
    },
    querySearch(str, callback) {
      if (!str) {
        callback(this.flexBasis.values)
      }
      let num = parseInt(str)
      if (!isNaN(num)) {
        num = Math.abs(num)
        callback([
          { value: `${num}px` },
          { value: `${num}%` }
        ])
      }
    }
  }
}
</script>

<style scoped>
.flex-edit {
  position: fixed;
  bottom: 100px;
  right: 100px;
}
.w450 {
  width: 450px;
  margin: auto;
}
.w217 {
  width: 217px !important;
}
.explain-panel {
  width: 50px;
  text-align: center;
  display: inline-block;
  color: #E6A23C;
  cursor: pointer;
}
</style>
