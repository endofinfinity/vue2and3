<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input class="new-todo"
           v-model="todoName"
           @keyup.enter="handleAdd"
           placeholder="请输入任务" />
    <button class="add"
            @click="handleAdd">添加任务</button>
  </header>
</template>

<script>
export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods: {
    handleAdd () {
      this.$emit('add', this.todoName)
      this.todoName = ''
    }

  }

}
</script>

<style scoped>
.header input {
  position: relative;
  border: 2px solid rgba(175, 47, 47, 0.8);
  border-radius: 10px;
}
.header .add {
  position: absolute;
  right: 15px;
  top: 15px;
  height: 68px;
  width: 140px;
  text-align: center;
  background-color: rgba(175, 47, 47, 0.8);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  border-radius: 0 10px 10px 0;
}
</style>