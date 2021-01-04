import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header'
import { findTestWrapper } from '@/utils/testUtils'
import store from '@/store/index'

describe('header Test', () => {
  it('监测header组件样式是否发生变换', () => {
    const wrapper = shallowMount(Header, { store })
    expect(wrapper).toMatchSnapshot()
  })
  it('header 有一个input', () => {
    const wrapper = shallowMount(Header, { store })
    const input = findTestWrapper(wrapper, 'header-input').at(0)
    expect(input.exists()).toBeTruthy()
  })

  it('header 中input 内容为空', () => {
    const wrapper = shallowMount(Header, { store })
    const inputValue = store.state.inputValue
    expect(inputValue).toBe('')
    expect(wrapper)
  })

  it('header 中input 有内容时', () => {
    const wrapper = shallowMount(Header, { store })
    const input = findTestWrapper(wrapper, 'header-input').at(0)
    input.setValue('test')
    const inputValue = store.state.inputValue
    expect(inputValue).toBe('test')
  })

  it('header 中input内容为空时，不发送add事件', () => {
    const wrapper = shallowMount(Header, { store })
    const input = findTestWrapper(wrapper, 'header-input').at(0)
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('header 中input内容不为空时，触发add事件', () => {
    const wrapper = shallowMount(Header, { store })
    const input = findTestWrapper(wrapper, 'header-input').at(0)
    input.setValue('test keyup.enter not empty')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
  })

  it('header 中input触发add事件后，清空内容', () => {
    const wrapper = shallowMount(Header, { store })
    const input = findTestWrapper(wrapper, 'header-input').at(0)
    input.setValue('test keyup.enter not empty')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    const inputValue = store.state.inputValue
    expect(inputValue).toBe('')
  })
})
