<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ $store.state.count }}</label>
    <br />
    <button>值 - 1</button>
		<button @click="changeTitle('hahah')">改标题</button>
    <button @click="setAsyncNum(999)">一秒后999</button>
    <button @click="setAsyncNum1(998)">一秒后998</button>
    <hr>
    <div>模块演示mapState</div>
    <div>{{ user.userInfo.name }}</div>
    <div>{{ setting.theme }}</div>
    <div>{{ userInfo }}</div>
    <div>{{ setting.desc }}</div>
    <hr>
    <div>Getters模拟</div>
    <div>{{ UpperName  }}</div>
    <hr>
    <div>mapMutations案例</div>
    <button @click="setUser({name:'张三',age:18})">更新user</button>
    <button @click="setUserWait({name:'李四',age:40})">1秒后更新user2</button>
    <button @click="setThem('red')">更新theme</button>

  </div>

</template>

<script>
import {mapMutations,mapActions,mapState, mapGetters} from 'vuex'
export default {
  name: 'Son2Com',
	computed: {
		...mapState(['count','title','user','setting']),
    ...mapState('user',['userInfo']),
    ...mapState('setting',['theme','desc']),
    ...mapGetters('user', ['UpperName'])


	},
	methods: {
    // 全局
    ...mapActions(['setAsyncNum']),
		...mapMutations(['changeTitle']),
		// 省略commit步骤
		// changeTitle() {
			// this.$store.commit('changeTitle', '新的标题:哈哈哈')
		// }
    setAsyncNum1(num) {
      // 使用dispatch来调用提交actions里的方法
      this.$store.dispatch('setAsyncNum', num)
    },
    // 分模块
    ...mapMutations('setting',['setThem']),
    ...mapMutations('user',['setUser']),
    ...mapActions('user',['setUserWait']),

	}
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>