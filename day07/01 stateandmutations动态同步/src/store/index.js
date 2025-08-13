import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

const store = new vuex.Store({
	// 严格模式，占用性能，项目上线需要关闭
	strict: true,
  state: {
		
		count:101,
		title:'仓库大标题'
	},
  mutations: {
		addNum(state,num) {
			state.count += num
		},
		changeTitle(state,newTitle) {
			state.title = newTitle
		},
		changeV(state,newNum){
			state.count = newNum
		}
	},

})

export default store;