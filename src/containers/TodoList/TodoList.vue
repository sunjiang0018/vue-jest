<template>
  <div>
    <Header @add="addTodoItem" />
    <undo-list
      data-test="undo-list"
      :list="undoList"
      @delete="deleteUndoItem"
      @finish="finishUndoItem"
      @changeValue="changeValue"
      @reset="reset"
      @edit="edit"
    />
    <finish-list :list='finishList' />
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
      this.undoList.push({
        value: item,
        status: 'div'
      })
    },
    deleteUndoItem (index) {
      this.undoList.splice(index, 1)
    },
    finishUndoItem (index) {
      const item = this.undoList.splice(index, 1)
      this.finishList.push(...item)
    },
    reset () {
      for (let i = 0; i < this.undoList.length; i++) {
        const item = this.undoList[i]
        this.$set(item, 'status', 'div')
      }
    },
    edit (index) {
      for (let i = 0; i < this.undoList.length; i++) {
        const item = this.undoList[i]
        if (index === i) {
          this.$set(item, 'status', 'input')
        } else {
          this.$set(item, 'status', 'div')
        }
      }
    },
    changeValue ({ index, value }) {
      this.$set(this.undoList[index], 'value', value)
      this.$set(this.undoList[index], 'status', 'div')
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
