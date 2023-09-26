<template>
  <div class="base_c">
    我是c组件
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
    Bus.$on('sendMsg', (message) => {
      this.msg = message
    })
  }

}
</script>

<style>
.base_c {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>