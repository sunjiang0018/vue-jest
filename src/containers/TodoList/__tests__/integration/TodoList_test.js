import { mount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList'
import { findTestWrapper } from '@/utils/testUtils'
import store from '@/store/index'

describe('TodoList 集成测试', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it(`
    1、向input中输入内容
    2、用户按下会车按钮
    3、列表项中增加相应的内容项
  `, async () => {
    const wrapper = mount(TodoList, {
      store
    })
    const inputElem = findTestWrapper(wrapper, 'header-input').at(0)

    const content = 'integration Test'
    inputElem.setValue(content)
    inputElem.trigger('change')
    inputElem.trigger('keyup.enter')

    // 需要， 如果不加上这句话。组件将不能及时作出re-rendering
    await wrapper.vm.$nextTick()
    const listItem = findTestWrapper(wrapper, 'list-item')
    expect(listItem.length).toBe(1)
    expect(listItem.at(0).text()).toContain(content)
  })

  it(`
    1、异步请求undolist数据
    2、显示undolist数据
  `, async () => {
    const wrapper = mount(TodoList, { store })
    jest.runAllTimers()

    // 需要， 如果不加上这句话。组件将不能及时作出re-rendering
    await wrapper.vm.$nextTick()

    const listItem = findTestWrapper(wrapper, 'list-item')
    expect(listItem.length).toBe(2)
  })
})
