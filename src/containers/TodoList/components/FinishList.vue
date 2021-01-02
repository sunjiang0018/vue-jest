<template>
  <div class="undolist">
    <div class="title">
      已经完成
      <span
        data-test='count'
        class="count"
      >{{list.length}}</span>
    </div>
    <ul class="list">
      <li
      class="item finish"
        data-test='item'
        v-for="(item, index) in list"
        :key="index"
      >{{item.value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FinishList',

  props: ['list']
}
</script>

<style>

.finish{
  background-color: #b5b2b2;
}
</style>
