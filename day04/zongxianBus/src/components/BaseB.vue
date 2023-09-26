<template>
  <div class="base_b">
    我是b组件(发送方)
    <button @click="sendMsg">发送</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus.js'

export default {
  methods: {
    sendMsg () {
      Bus.$emit('sendMsg', '今天有雨，出门带伞')
    }
  }

}
</script>

<style>
.base_b {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>