/* 全局注册自定义组件 */

import Vue from 'vue'

import Toolbox from '@/components/toolbox.vue'

Vue.component('toolbox', Toolbox)
Vue.component('github', () => import('@/components/github.vue'))
