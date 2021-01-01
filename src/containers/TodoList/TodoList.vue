<template>
  <div>
    <Header @add="addTodoItem" />
    <undo-list
      data-test="undo-list"
      :list="undoList"
      @delete="deleteUndoItem"
      @finish="finishUndoItem"
    />
    <finish-list :list='finishList'/>
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'
import FinishList from './components/FinishList'

export default {
  name: 'TodoList',
  data () {
    return {
      undoList: [],
      finishList: []
    }
  },
  methods: {
    addTodoItem (item) {
      this.undoList.push(item)
    },
    deleteUndoItem (index) {
      this.undoList.splice(index, 1)
    },
    finishUndoItem (index) {
      const item = this.undoList.splice(index, 1)
      this.finishList.push(...item)
    }
  },
  components: {
    Header,
    UndoList,
    FinishList
  }
}
</script>

<style>
</style>
