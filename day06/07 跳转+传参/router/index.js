import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound'

import Vue from 'vue'
import VueRouter from 'vue-router'
// 1、注册vue-router路由
Vue.use(VueRouter) // VueRouter插件初始化


// 2、创建了一个路由对象
const router = new VueRouter({
	mode:'history',
  routes: [
		
		{path:'/',redirect:'/home'},
    { path: '/home', component: Home },
		// ?表示可选
    { path: '/search/:words?', component: Search ,name:'search'},
		{path:'*',component:NotFound},
  ]
})

export default router