
class CustomEnv
{
  get bmapKey() {
    return 'kGNFvzccNhXtVfwGDi5iIQZtACfiViEB'
  }
}


import Vue from 'vue'
Vue.prototype.$env = new CustomEnv()