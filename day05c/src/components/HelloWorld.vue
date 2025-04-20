<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input ref='input01'
           v-focus
           type="text">
    <br>
    <input ref='input02'
           v-focus01
           type="text">
    <br>
    <h1 v-color="color1">hello1</h1>
    <h2 v-color="color2">hello2</h2>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      color1: 'red',
      color2: 'blue'
    }
  },

  // mounted () {
  //   this.$refs.input01.focus()

  // }
  // 局部注册指令
  directives: {
    focus01: {
      inserted (el) {
        el.focus()
      }
    },
    color: {
      //binding 指令的相关信息
      inserted (el, binding) {
        el.style.color = binding.value
      },
      update (el, binding) {
        el.style.color = binding.value
      }
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
