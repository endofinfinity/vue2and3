<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input v-model="searchKey"
             placeholder="请输入搜索内容"
             type="text">
      <button @click="goSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindMusic',
  data () {
    return {
      // 搜索内容
      searchKey: ''
    }
  },
  methods: {
    goSearch () {
      // 1、path路径跳转
      // 1.1 path直接跳转
      // this.$router.push('/search');

      // 1.2 完整对象写法-方便传参
      // this.$router.push({
      //   path: '/search',
      // });


      // 2、name命名跳转
      // 类似path路径的完整写法，适合长path路径跳转，同样也方便传参
      // this.$router.push({
      //   name: 'search'
      // })


      // 3、跳转+传参
      // 3.1、path路径跳转+?query传参
      // query传参的解析用query对象获取，适合参数较多的情况
      // 3.1.1、path直接跳转+？query传参
      // this.$router.push(`/search?key=${this.searchKey}`)
      // 3.1.2、path完整对象跳转+？query传参
      // this.$router.push({
      //   path: '/search',
      //   query: {
      //     key: this.searchKey
      //   }
      // });
      // 3.1.3、path路径跳转+动态路由传参（需要配置动态路由）
      // 动态路由传参的解析用params对象获取
      // this.$router.push(`/search/${this.searchKey}`);
      // 3.1.4、path完整对象跳转+动态路由传参
      // this.$router.push({
      //   path: `/search/${this.searchKey}`,
      // })

      // 3.2、name命名跳转+传参
      // 两种传参方式格式相似，区别是一个query对象，一个params对象
      // 3.2.1、name命名跳转+？query传参
      // this.$router.push({
      //   name: 'search',
      //   query: {
      //     key: this.searchKey
      //   }
      // })
      // 3.2.2、name命名跳转+动态路由传参（需要配置动态路由）
      this.$router.push({
        name: 'search',
        params: {
          words: this.searchKey
        }
      })

    }
  }
}
</script>

<style>
.logo-box {
  height: 250px;
  background: url('@/assets/logo.png') no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
.search-box input {
  width: 400px;
  height: 36px;
  line-height: 36px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
  box-sizing: border-box;
  /* 清除默认外边距和内边距 */
  margin: 0;
  padding: 0 10px; /* 保持输入框内边距一致 */
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 150px;
  height: 36px;
  text-align: center;
  border: 2px solid #ad2a26;
  background-color: #ad2a26;
  color: #fff;
  /* position: relative; */
  /* left: -2px; */
  border-radius: 0 4px 4px 0;
  vertical-align: top;
  /* 移除相对定位和left偏移，使用flex自然对齐 */
  border-radius: 0 4px 4px 0;
  /* 添加边框盒模型 */
  box-sizing: border-box;
  margin: 2px;
  padding: 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>