<template>
  <div test><router-link to="/">首页</router-link></div>
</template>

<script>
export default {
  name: 'test',
  beforeCreate() {
    console.log('test beforeCreate');
  },
  created() {
    console.log('test created');
  },
  beforeMount() {
    console.log('test beforeMount');
  },
  mounted() {
    console.log('test mounted');
  },
  activated() {
    console.log('test activated');
  },
  deactivated() {
    console.log('test deactivated');
  },
  beforeDestroy() {
    console.log('test beforeDestroy');
  },
  destroyed() {
    console.log('test destroyed');
  }
}
</script>

<style>
</style>
