<template>
  <el-popover placement="right" width="400" trigger="hover">
    <i slot="reference" class="el-icon-question"></i>
    <el-collapse v-model="active">
      <el-collapse-item name="1">
        <el-divider slot="title" content-position="left">{{data.key}}</el-divider>
        <div>{{data.explain}}</div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <el-divider slot="title" content-position="left">{{selected | filterTitle}}</el-divider>
        <div>{{selected | filterExplain(data.values)}}</div>
      </el-collapse-item>
    </el-collapse>
  </el-popover>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          key: '',
          explain: '',
          values: [
            {
              value: '',
              explain: ''
            }
          ]
        }
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  filters: {
    filterTitle(selected) {
      if (!selected || /^\d+(\.\d+)?$/.test(selected)) {
        return 'Number'
      }
      if (/^\d+(\.\d+)?px$/.test(selected)) {
        return 'Length'
      }
      if (/^\d+(\.\d+)?%$/.test(selected)) {
        return 'Percentage'
      }
      return selected
    },
    filterExplain(selected, values) {
      if (!selected || /^\d+(\.\d+)?$/.test(selected)) {
        return values[0].explain
      }
      if (/^\d+(\.\d+)?px$/.test(selected)) {
        return values.filter(row => row.value.slice(-2) == 'px')[0].explain
      }
      if (/^\d+(\.\d+)?%$/.test(selected)) {
        return values.filter(row => row.value.slice(-1) == '%')[0].explain
      }
      return values.filter(row => row.value == selected)[0].explain
    }
  },
  data() {
    return {
      active: ["1", "2", "3"]
    }
  }
}
</script>

<style>
</style>
