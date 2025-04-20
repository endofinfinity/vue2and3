import Vue from 'vue'
import App from './App.vue' // 根组件
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

// 全局组件引入
import BaseBrandItem from './components/BaseBrandItem.vue'

// 全局组件注册
Vue.component('BaseBrandItem',BaseBrandItem)

Vue.config.productionTip = false
// vue 实例化，基于app.vue创建结构，render（渲染）到index页面中
new Vue({
  render: h => h(App),
}).$mount('#app')
 