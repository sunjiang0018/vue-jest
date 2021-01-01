import TodoList from '../../TodoList'
import { shallowMount } from '@vue/test-utils'
import { findTestWrapper } from '@/utils/testUtils'

describe('todoList test', () => {
  it('todolist 中undoList为空', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.vm.$data.undoList).toEqual([])
  })

  it('todolist 触发addTodoItem事件', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.vm.addTodoItem('inputValue Test')
    expect(wrapper.vm.$data.undoList).toEqual(['inputValue Test'])
  })

  it('todolist 中Undolist 是否传递list参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = findTestWrapper(wrapper, 'undo-list').at(0)
    expect(undoList.props('list')).toBeTruthy()
  })

  it('触发deleteUndoItem事件', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.deleteUndoItem(1)
    expect(wrapper.vm.$data.undoList).toEqual([1, 3])
  })

  it('触发finishUndoItem事件', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3],
      finishList: []
    })
    wrapper.vm.finishUndoItem(1)
    expect(wrapper.vm.$data.undoList).toEqual([1, 3])
    expect(wrapper.vm.$data.finishList).toEqual([2])
  })
})
