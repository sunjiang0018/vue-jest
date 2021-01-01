<template>
  <div id='app'>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/containers/TodoList/TodoList'
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  background-color: #cdcdcd;
}
</style>
