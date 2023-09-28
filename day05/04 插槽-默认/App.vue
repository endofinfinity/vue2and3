<template>
  <div>
    <MyDialog>
      <div>确认删除？</div>
    </MyDialog>
    <MyDialog>
      <div>确认退出？</div>
    </MyDialog>
    <MyDialog></MyDialog>
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