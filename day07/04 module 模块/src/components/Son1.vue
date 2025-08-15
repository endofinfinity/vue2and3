<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }} - {{ title }}</label>
    <br>
    <button @click="addNumber(1)">值 + 1</button>
		<button @click="addNumber(5)">值 + 5</button>
    <button @click="changeNum(666)">一秒后666</button>
    <div>{{ list }}</div>
    <div>{{ filterList }}</div>
    <hr>
    <div>模块演示原生写法</div>
    <div>{{ $store.state.user.userInfo.name }}</div>
    <button @click="updateUserInfo">更新个人信息</button>
    <button @click="updateUserInfo2">更新个人信息2</button>
    <div>{{ $store.state.setting.theme }}</div>
    <button @click="updateTheme"> 更新主题</button>
    <hr>
    <div>Getters模拟</div>
    <div>{{ $store.getters['user/UpperName'] }}</div>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from 'vuex'
export default {
  name: 'Son1Com',
	// mapState,mapMutations辅助函数来构造计算属性
  computed: {
    ...mapState(['count','title','list']),
		...mapGetters(['filterList'])
    
  },
	
  methods: {
    ...mapMutations(['addNum']),

    addNumber(num) {
			// 单项数据流，因损耗较大，vue不报错，不规范写法
      // this.$store.state.count++
			// console.log(this.$store.state.count);
			// 正确的写法,注意commit里的名称和store里的对应
			
			this.$store.commit('addNum',num)
			
    },
    changeNum(n) {
      this.$store.dispatch('setAsyncNum', n)
    },
    updateUserInfo(){
      this.$store.commit('user/setUser',{
        name:'liwei',
        age:222
      })
    },
    updateTheme(){
      this.$store.commit('setting/setThem','blue')
    },
    updateUserInfo2(){
      // 通过dispatch调用-->action里的异步方法调用-->mutations里的commit方法
      this.$store.dispatch('user/setUserWait',{
        name:'zhangsan2',
        age:29
      })
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>