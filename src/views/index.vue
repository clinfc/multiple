<template>
  <div class="index">
    <div class="header">
      <form class="form">
        <template v-for="item in type">
          <label class="radio-label" :key="item.value">
            <input type="radio" v-model="tv" name="type" :value="item.value"><span>{{item.name}}</span>
          </label>
        </template>
      </form>
    </div>
    <div class="main">
      <template v-for="item in type">
        <div class="content" :key="item.value" v-if="tv === item.value">
          <router-link class="card" v-for="ct in item.content" :key="ct.href" :to="ct.href">
            <template v-if="ct.src">
              <img :src="ct.src" :alt="ct.name">
            </template>
            <template e-else>
              <div>{{ct.name}}</div>
            </template>
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      tv: 'CSS3',
      type: [
        {
          name: 'CSS3',
          value: 'CSS3',
          content: [
            { name: 'Flex 布局', href: '/css/flex', src: '' },
          ]
        },
        {
          name: '数据可视化',
          value: 'visual',
          content: [
            { name: '混合实例', href: '/visual/basics', src: '' },
            { name: 'ECharts', href: '/echarts', src: '' },
          ]
        },
        {
          name: '测试',
          value: 'test',
          content: [
            { name: 'test', href: '/test', src: '' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.index {
  width: 1200px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 60px;
    flex-shrink: 0;
    line-height: 60px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    .form {
      width: 100%;
      display: flex;
      overflow-y: hidden;
      overflow-x: scroll;
      .radio-label {
        flex-shrink: 0;
        display: block;
        cursor: pointer;
        box-sizing: border-box;
        input[type=radio] {
          display: none;
        }
        span {
          display: block;
          padding: 0 15px;
          border-bottom: 2px solid #FFF;
          box-sizing: border-box;
          font-size: 14px;
          height: 60px;
        }
        input[type=radio]:checked + span {
          color: #5FB878;
          border-bottom-color: #5FB878;
        }
      }
    }
  }

  .main {
    flex: 1;
    overflow: hidden;
    .content {
      width: 100%;
      overflow-y: hidden;
      display: flex;
      flex-wrap: wrap;
      padding: 0 5px 25px;
      .card {
        display: block;
        width: 218px;
        text-decoration: none;
        border: 1px solid #5FB878;
        border-radius: 5px;
        box-shadow: 0 1px 10px 1px rgba(95, 184, 120, 0.5);
        box-sizing: border-box;
        margin-top: 25px;
        overflow: hidden;
        &:hover {
          box-shadow: 0 0 10px 1px #5FB878;
        }
        &:not(:nth-child(5n)) {
          margin-right: 25px;
        }
        &>div {
          padding: 20px;
        }
        &>img {
          width: 100%;
          height: 145.3px;
        }
      }
    }
  }

}
</style>
