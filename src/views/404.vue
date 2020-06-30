<template>
  <div class="error">404  页面丢失了！ <router-link to="/">返回首页</router-link></div>
</template>

<script>
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  a {
    text-decoration: none;
    color: #009926;
  }
}
</style>
