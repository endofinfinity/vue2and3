import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index.js'

new Vue({
  render: h => h(App),
  // 3、关联路由实例
  router:router
}).$mount('#app')
