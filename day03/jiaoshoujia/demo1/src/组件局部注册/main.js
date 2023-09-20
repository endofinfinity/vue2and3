import Vue from 'vue'
// 导入根组件 App1.vue
import App from './局部组件/App.vue'
// 导入app.vue,基于app.vue创建index.html

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
