<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="keep"></router-view>
    </keep-alive>
    <router-view v-if="!keep"></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    keep() {
      return this.$route.meta.keepAlive
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
