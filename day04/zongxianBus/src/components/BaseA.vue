<template>
  <div class="base_a">
    我是a组件
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Bus from '../utils/EventBus.js'
export default {
  data () {
    return {
      msg: '',
    }
  },

  created () {
    // 创建开始就监听
    Bus.$on('sendMsg', (message) => {
      this.msg = message
    })
  }

}
</script>

<style>
.base_a {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>