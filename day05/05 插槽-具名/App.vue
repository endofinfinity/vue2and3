<template>
  <div>
    <MyDialog>
      <template v-slot:head>
        <h3>友情提示</h3>
        <span class="close">✖️</span>
      </template>
      <template v-slot:content>
        <h3>内容</h3>
      </template>
      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue';
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