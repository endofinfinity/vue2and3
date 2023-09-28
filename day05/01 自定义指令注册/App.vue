<template>
  <div id="app">
    <h1>自定义指令</h1>
    <input type="text" ref="inp" v-focus>
  </div>
</template>

<script>

export default {
  // 1 昨天ref知识复习
  // mounted () {
  //   this.$refs.inp.focus()
  // }
  // 2、1 局部注册指令
  // directives: {
  //   // 指令名：{指令的配置项}
  //   focus: {
  //     // inserted：加载好，类似mounted，vue3里更新到直接用mounted。el参数是自定义指令绑定的元素
  //     inserted (el) {
  //       el.focus()
  //     }
  //   }
  // }
}
</script>

<style>
</style>
