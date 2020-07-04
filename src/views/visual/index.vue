<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/visual/basics">basic</router-link>
  </div>
</template>

<script>
export default {
  name: 'vb-index',
  beforeCreate() {
    console.log('visual-index beforeCreate');
  },
  created() {
    console.log('visual-index created');
  },
  beforeMount() {
    console.log('visual-index beforeMount');
  },
  mounted() {
    console.log('visual-index mounted');
    document.addEventListener('keyup', function(e) {
      console.log(e.key);
    }, false)
  },
  activated() {
    console.log('visual-index activated');
  },
  deactivated() {
    console.log('visual-index deactivated');
  },
  beforeDestroy() {
    console.log('visual-index beforeDestroy');
  },
  destroyed() {
    console.log('visual-index destroyed');
  }
}
</script>

<style>
</style>
