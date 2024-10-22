import Vue from 'vue'
// 导入vuerouter
import VueRouter from 'vue-router'
// 导入路由组件，@指代src的路径
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'

// 注册vue-router路由
Vue.use(VueRouter)
Vue.config.productionTip = false

// 创建路由实例对象，并配置路由路径
const router = new VueRouter({
  routes:[ 
    // 配置路径到具体的组件
    { path:'/find',component:Find},
    { path:'/my',component:My},
    { path:'/friend',component:Friend},
  ]
})

export default router