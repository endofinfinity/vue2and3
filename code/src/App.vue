<template>
  <div id="app">
    <h1>根组件 
      - {{ $store.state.title }} 
      - {{ count }}
    </h1>
    <input :value="count" @input="changeValue" type="text">
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'

export default {
  name: 'app',
  data: function () {
    return {

    }
  },
  computed: {
    // 3、在这里定义计算属性
    count() {
      return this.$store.state.count
    }
  },
  created() {
    // 4、在这里可以通过 this.$store 访问到 Vuex 的 store 实例
    console.log(this.$store);
  },
  components: {
    Son1,
    Son2
  },
  methods: {
    changeValue(e) {
      const num = +e.target.value
      console.log(num);
      this.$store.commit('changeV', num)
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
