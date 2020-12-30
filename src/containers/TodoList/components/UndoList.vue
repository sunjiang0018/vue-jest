<template>
  <div>
    <div data-test="count">{{list.length}}</div>

    <div>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="item"
          data-test="undoItem"
        >
        {{item}}
        <span data-test='delete-button' @click="deleteHandle(index)">-</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  methods: {
    deleteHandle (index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style>
</style>
