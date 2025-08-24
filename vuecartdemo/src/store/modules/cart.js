import axios from 'axios'

export default {
  namespaced: true,
  // 属性
  state () {
    return {
      list: []
    }
  },
  // 类计算属性
  mutations: {
    updateList (state, payload) {
      state.list = payload
    },
    updateCount (state, obj) {
      // console.log(obj)
      const items = state.list.find(item => item.id === obj.id)
      if (items) {
        items.count = obj.count
      }
    }
  },
  // 异步方法
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      // console.log(res)
      context.commit('updateList', res.data)
    },
    async updateCount (context, obj) {
      // console.log(obj)
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.count
      })
      context.commit('updateCount', {
        id: obj.id,
        count: obj.count
      })
    }
  },
  // 属性操作，筛选汇总等
  getters: {
    totalPrice (state) {
      return state.list.reduce((total, item) => total + item.count * item.price, 0)
    },
    totalCount (state) {
      return state.list.reduce((total, item) => total + item.count, 0)
    }
  }
}
