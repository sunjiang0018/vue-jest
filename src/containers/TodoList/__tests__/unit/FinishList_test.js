import FinishList from '@/containers/TodoList/components/FinishList'
import { shallowMount } from '@vue/test-utils'
import { findTestWrapper } from '@/utils/testUtils'

describe('FinishList组件', () => {
  it('count 显示是否正确', async () => {
    const wrapper = shallowMount(FinishList, {
      propsData: {
        list: []
      }
    })
    let count = findTestWrapper(wrapper, 'count')
    expect(count.at(0).text()).toEqual('0')

    await wrapper.setProps({
      list: [1, 2, 3]
    })
    count = findTestWrapper(wrapper, 'count')
    expect(count.at(0).text()).toEqual('3')
  })

  it('list 是否渲染正确', async () => {
    const wrapper = shallowMount(FinishList, {
      propsData: {
        list: []
      }
    })
    let finishItem = findTestWrapper(wrapper, 'item')
    expect(finishItem.length).toBe(0)

    await wrapper.setProps({
      list: [1, 2, 3]
    })

    finishItem = findTestWrapper(wrapper, 'item')
    expect(finishItem.length).toBe(3)
  })
})
