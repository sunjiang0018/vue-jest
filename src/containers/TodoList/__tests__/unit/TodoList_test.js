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
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 'inputValue Test', status: 'div' }
    ])
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

  it('触发edit事件', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'div' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.edit(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 2, status: 'input' },
      { value: 3, status: 'div' }
    ])
  })

  it('触发edit事件', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'input' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.reset()
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 2, status: 'div' },
      { value: 3, status: 'div' }
    ])
  })

  it('触发changeValue事件', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'input' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.changeValue({ index: 1, value: 1234 })
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 1234, status: 'div' },
      { value: 3, status: 'div' }
    ])
  })
})
