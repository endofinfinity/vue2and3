<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }} - {{ title }}</label>
    <br>
    <button @click="addNumber(1)">值 + 1</button>
		<button @click="addNumber(5)">值 + 5</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Son1Com',
	// mapState辅助函数来构造计算属性s
  computed: {
    ...mapState(['count','title'])
  },
	
  methods: {
    addNumber(num) {
			// 单项数据流，因损耗较大，vue不报错，不规范写法
      // this.$store.state.count++
			console.log(this.$store.state.count);
			// 正确的写法,注意commit里的名称和store里的对应
			
			this.$store.commit('addNum',num)
			
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