import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '@/views/Layout.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Article from '@/views/Article.vue';
import Collect from '@/views/Collect.vue';
import Like from '@/views/Like.vue';
import User from '@/views/User.vue';
// 1、引入组件
Vue.use(VueRouter)
// 2、创建路由对象
const router = new VueRouter({
	//4、 配置路由路径映射
  routes: [
		{path: '/',component: Layout,
		children: [
			{path: '/Article',component: Article,},
			{path: '/Collect',component: Collect,},
			{path: '/Like',component: Like,},
			{path: '/User',component: User,}
		]
		}
		,
    {path: '/detail',component: ArticleDetail,},
		{path:'/',redirect:'/Article'},

    
  ]
})

export default router