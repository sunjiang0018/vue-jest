import { findTestWrapper } from '@/utils/testUtils'
import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList'

describe('UndoList 组件测试', () => {
  it('list为空时 count为0', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: []
      }
    })
    const count = findTestWrapper(wrapper, 'count')
    expect(count.at(0).text()).toEqual('0')
  })

  it('list为[1,2,3] count为3', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const count = findTestWrapper(wrapper, 'count')
    expect(count.at(0).text()).toEqual('3')
  })

  it('列表是否渲染正确', async () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    let undoItems = findTestWrapper(wrapper, 'list-item')
    expect(undoItems.length).toBe(3)

    await wrapper.setProps({ list: [] })
    undoItems = findTestWrapper(wrapper, 'list-item')
    expect(undoItems.length).toBe(0)
  })

  it('删除按钮点击后是否触发delete事件', () => {
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

  it('checkbox点击事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const checkboxs = findTestWrapper(wrapper, 'finish')

    for (let i = 0; i < checkboxs.length; i++) {
      checkboxs.at(i).trigger('click')
      expect(wrapper.emitted().finish).toBeTruthy()
      expect(wrapper.emitted().finish[i][0]).toBe(i)
    }
    expect(wrapper)
  })
  it('触发item的点击事件，触发edit', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 2, status: 'div' },
          { value: 3, status: 'div' }
        ]
      }
    })

    const items = findTestWrapper(wrapper, 'list-item')

    for (let i = 0; i < items.length; i++) {
      const item = items.at(i)
      item.trigger('click')
      expect(wrapper.emitted().edit[i][0]).toBe(i)
    }
  })

  it('焦点离开时，触发reset', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 2, status: 'input' },
          { value: 3, status: 'div' }
        ]
      }
    })
    const input = findTestWrapper(wrapper, 'input').at(0)
    input.trigger('blur')
    expect(wrapper.emitted().reset).toBeTruthy()
  })

  it('进入编辑模式中，input内容等于value值', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 2, status: 'input' },
          { value: 3, status: 'div' }
        ]
      }
    })

    const input = findTestWrapper(wrapper, 'input').at(0)
    expect(input.element.value).toEqual('2')
  })
  it('input触发change事件时，触发changeValue回调', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 2, status: 'input' },
          { value: 3, status: 'div' }
        ]
      }
    })

    const input = findTestWrapper(wrapper, 'input').at(0)
    input.element.value = '123'
    input.trigger('change')

    expect(wrapper.emitted().changeValue).toBeTruthy()
    expect(wrapper.emitted().changeValue[0][0]).toEqual({
      value: '123',
      index: 1
    })
  })
})
