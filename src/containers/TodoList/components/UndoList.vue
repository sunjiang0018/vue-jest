<template>
  <div class="undolist">
    <div class="title">
      正在进行
      <span
        data-test="count"
        class="count"
      >
        {{list.length}}
      </span>
    </div>

    <div>
      <ul class="list">
        <li
          v-for="(item, index) in list"
          :key="item"
          data-test="undoItem"
          class="item"
        >
          <div>
            <input
              type="checkbox"
              data-test="finish"
              @click="undoItemFinish(index)"
            />
            {{item}}
          </div>
          <span
            class="delete-button"
            data-test='delete-button'
            @click="deleteHandle(index)"
          >-</span>
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
    },
    undoItemFinish (index) {
      this.$emit('finish', index)
    }
  }
}
</script>

<style>
.undolist {
  width: 600px;
  margin: 0 auto;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 30px;
  font-size: 24px;
  margin: 10px 0;
  font-weight: bold;
}

.count {
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  color: #000;
  background-color: #e6e6e6;
}
.list {
  list-style-type: none;
}
.item {
  background: #fff;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  text-indent: 10px;
  border-left: 5px solid #629a9a;
  border-radius: 5px;
  margin-bottom: 10px;
}

.delete-button {
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  text-indent: 0;
  border-radius: 10px;
  color: #000;
  background-color: #e6e6e6;
}
</style>
