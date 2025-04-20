<template>
  <div>
    <!-- 2. 在使用组件时，组件标签内填入内容 -->
    <MyDialog>
      <template v-slot:head>
        <div>我是head</div>
      </template>

      <template v-slot:content>
        <div>我是内容</div>
      </template>
    </MyDialog>

  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>