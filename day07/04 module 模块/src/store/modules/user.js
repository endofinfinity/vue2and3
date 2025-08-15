const state = {
  userInfo: {
		name:'zzss',
		agg:29
	}
}

const mutations={
  setUser(state,newInfo){
    state.userInfo = newInfo
  }
}
const actions = {
  setUserWait(context,newInfo){
    setTimeout(() => {
      // 异步去调用Mutations里的方法
      context.commit('setUser',newInfo)
    }, 1000);
  }
}
const getters = {
  UpperName(state) {
    return state.userInfo.name.toUpperCase()
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}