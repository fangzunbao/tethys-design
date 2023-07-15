import { defineComponent, ref, toRefs, watchEffect } from 'vue'
import props from './index.props'
import ButtonName from '../../../styles/global.module.scss'
import '../styles/index.scss'

export default defineComponent({
  name: 'ThButton',
  props: { ...props },
  setup(props, { slots }) {
    const {
      type,
      size,
      radius,
      circle,
      plain,
      disabled,
      loading,
      icon,
    } = toRefs(props)
    const btnClass = ref(`th-btn th-${type.value}-btn`)

    // 组合类名
    const combineClassName = (name: string = '') => {
      const set = new Set(btnClass.value.split(' '))
      set.delete(name)
      set.add(name)
      return Array.from(set).join(' ')
    }

    watchEffect(() => {
      // 按钮大小
      switch (size.value) {
        case 'small':
          btnClass.value = combineClassName('th-small-btn')
          break
        case 'default':
          btnClass.value = combineClassName()
          break
        case 'large':
          btnClass.value = combineClassName('th-large-btn')
          break
        default:
          btnClass.value = combineClassName()
      }
      // 按钮镂空
      if (plain.value) {
        btnClass.value = combineClassName('plain')
      }
      // 按钮圆角
      if (radius.value) {
        btnClass.value = combineClassName('radius')
      }
      // 按钮圆形
      if (circle.value) {
        btnClass.value = combineClassName('circle')
      }
      //按钮加载
      if (loading.value) {
        btnClass.value = combineClassName('loading')
      }
      // 按钮禁用
      if (disabled.value) {
        btnClass.value = combineClassName('disabled')
      }
    })

    return () => (
      <button class={btnClass.value} disabled={disabled.value || loading.value}>
        {(icon.value || loading.value) && (
          <th-icon
            class={loading.value ? 'is-loading' : ''}
            name={loading.value ? 'Loading' : icon.value}
            color={
              plain.value ? ButtonName[`th-${type.value}-color`] : '#ffffff'
            }
          ></th-icon>
        )}
        {slots.default && slots.default()}
      </button>
    )
  },
})
