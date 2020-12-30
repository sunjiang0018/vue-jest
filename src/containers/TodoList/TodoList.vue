<template>
  <div>
    <Header @add="addTodoItem" />
    <undo-list
      data-test="undo-list"
      :list="undoList"
      @delete="deleteUndoTiem"
    />
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'
export default {
  name: 'TodoList',
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addTodoItem (item) {
      this.undoList.push(item)
    },
    deleteUndoTiem (index) {
      this.undoList.splice(index, 1)
    }
  },
  components: {
    Header,
    UndoList
  }
}
</script>

<style>
</style>
