<template>
  <div class="header">
    <div class="header-contain">
      TodoList
      <input
        type="text"
        data-test="header-input"
        v-model="inputValue"
        placeholder="input TodoItem"
        @keyup.enter="addTodoItem"
      />
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style>

.header{
  height: 50px;
  width: 100%;
  background-color: #333;
}

.header-contain{
  width:  600px;
  margin: 0 auto;
  color: #fff;
  line-height: 50px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}

.header-contain > input[type="text"]{
  width: 230px;
  margin: 5px 0;
  color: #333;
  text-indent: 10px;
  font-size: 1rem;
}
</style>
