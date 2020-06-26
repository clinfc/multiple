import Vue from 'vue'

import router from './router'
import store from './store'
import App from './App.vue'

import './plugins/element-ui.js'
import './plugins/vue-echarts.js'
import './plugins/v-charts.js'
import '@/assets/css/hljs.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
