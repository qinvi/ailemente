import Button from './Button.vue'
import { mount } from '@vue/test-utils'

describe('Button 测试', () => {
  it('button 文本测试', () => {
    const context = '这是测试文本内容'
    const wrapper = mount(Button, {
      slots: {
        default: context,
      },
    })
    expect(wrapper.text()).toBe(context)
  })
  it('button size 属性测试', () => {
    const size = 'small'
    const wrapper = mount(Button, () => {
      size
    })
    expect(wrapper.classes()).toContain('el-button--small')
  })
})
