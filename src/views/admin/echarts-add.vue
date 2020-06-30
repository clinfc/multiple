<template>
  <div class="echarts-form-main">
    <div class="cut-off"></div>
    <div id="monaco-editor"></div>
    <div class="cut-off"></div>
    <el-form :inline="true" ref="form" :model="form" :rules="rules">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="type">
        <el-input v-model="form.type" placeholder="分类"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input v-model="form.content" placeholder="请在编辑器内输入内容" readonly :rows="1"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'

export default {
  data() {
    return {
      mkr: null,
      form: {
        name: '',
        type: '',
        content: ''
      },
      rules: {
        name: [
          { required: true, message: '名称不能为空', trigger: 'blur' },
          { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '类型不能为空', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.mkr = monaco.editor.create(document.getElementById('monaco-editor'), {
      value: this.form.content,
      languages: 'javascript',
      theme: "vs-dark",
    })
    this.mkr.onDidChangeModelContent(() => {
      this.form.content = this.mkr.getValue()
    })
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (!valid) return
        this.$axios.post('/options/add', this.form).then(({data}) => {
          this.$router.push(`/visual/echarts/${data._id}`)
        })
      })
    }
  },
  destroyed() {
    this.mkr.dispose()
  }
}
</script>

<style lang="scss" scoped>
.echarts-form-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  #monaco-editor {
    width: 100%;
    height: 70%;
    border: 1px solid #e5e5e5;
  }
  .cut-off {
    height: 5%;
  }
  .el-form {
    .btn {
      float: right;
    }
  }
}
</style>
