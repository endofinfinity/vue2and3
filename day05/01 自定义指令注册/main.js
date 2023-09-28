import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 2、2 全局注册自定义指令
Vue.directive('focus',{
  inserted(el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
