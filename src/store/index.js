import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import flex from './modules/flex.js'

const store = () => new Vuex.Store({
  modules: {
    flex
  }
})

export default store