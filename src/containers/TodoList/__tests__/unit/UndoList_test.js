import { findTestWrapper } from '@/utils/testUtils'
import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList'

describe('UndoList 组件测试', () => {
  it('undoList list为空时 count为0', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: []
      }
    })
    const count = findTestWrapper(wrapper, 'count')
    expect(count.at(0).text()).toEqual('0')
  })

  it('undoList list为[1,2,3] count为3', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const count = findTestWrapper(wrapper, 'count')
    expect(count.at(0).text()).toEqual('3')
  })

  it('undoList 列表是否渲染正确', async () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    let undoItems = findTestWrapper(wrapper, 'undoItem')
    expect(undoItems.length).toBe(3)

    await wrapper.setProps({ list: [] })
    undoItems = findTestWrapper(wrapper, 'undoItem')
    expect(undoItems.length).toBe(0)
  })

  it('undoList 删除按钮点击后是否触发delete事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })

    const deleteButtons = findTestWrapper(wrapper, 'delete-button')

    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons.at(i).trigger('click')
      expect(wrapper.emitted().delete).toBeTruthy()
      expect(wrapper.emitted().delete[i][0]).toBe(i)
    }
  })
})