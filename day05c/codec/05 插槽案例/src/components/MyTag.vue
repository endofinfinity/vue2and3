<template>
  <div>
    <div class="my-tag">
      <input v-if="isEdit"
             ref="inp"
             v-focus
             @blur="isEdit = false"
             class="input"
             type="text"
             :value="value"
             @keyup.enter="handleEnter"
             placeholder="输入标签" />
      <div v-else
           @dblclick="dbclick"
           class="text">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data: function () {
    return {
      isEdit: false,
    };
  }
  ,
  methods: {
    dbclick () {
      this.isEdit = true;
      // 1、vue是异步更新，等dom刷新了，用$nextTick方法再获取焦点

      // this.$nextTick(() => {
      //   this.$refs.inp.focus();
      // });
      // 2、变更用自定义指令v-focus，借助钩子函数inserted获取焦点
    },
    handleEnter (e) {
      if (e.target.value.trim() === '') {
        alert('请输入内容');
        return;
      }

      this.$emit('input', e.target.value);
      this.isEdit = false;
    }
  }



}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>