import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Friend from './views/Friend.vue'

// 注册vue-router路由
Vue.use(VueRouter)
Vue.config.productionTip = false

// 创建路由实例对象
const router = new VueRouter({
  routes:[
    // 路径，组件
    { path:'/find',component:Find},
    { path:'/my',component:My},
    { path:'/friend',component:Friend},
  ]
})

new Vue({
  render: h => h(App),
  // 关联路由实例
  router:router
}).$mount('#app')
