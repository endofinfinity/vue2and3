const state = {
  theme: 'dark',
  desc: '描述真呀真不错'
}

const mutations = {
  setThem(state,newThe){
    state.theme =newThe
  }
}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}