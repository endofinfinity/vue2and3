<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ $store.state.count }}</label>
    <br />
    <button>值 - 1</button>
		<button @click="changeTitle('hahah')">改标题</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Son2Com',
	methods: {
		...mapMutations(['changeTitle']),
		// 省略commit步骤
		// changeTitle() {
			// this.$store.commit('changeTitle', '新的标题:哈哈哈')
		// }
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