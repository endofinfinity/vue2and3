<template>
  <div>
    <h1 v-color="color1">指令1</h1>
    <h1 v-color="color2">指令2</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color1: 'pink',
      color2: 'blue'
    }
  },
  directives: {
    color: {
      inserted (el, binding) {
        // binding.value 就是自定义指令的值
        el.style.color = binding.value
      },
      // update 自定义指令的值修改的时候触发，提供值变化后，dom响应式更新的逻辑
      update (el, binding) {
        el.style.color = binding.value
      }
    }
  }
}
</script>

<style>
</style>