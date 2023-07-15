import { defineComponent, toRefs } from 'vue'
import props from './index.props.js'
import '../../../assets/font/line/iconfont.js'
import '../style/index.scss'

export default defineComponent({
  name: 'ThIcon',
  props: { ...props },
  setup(props) {
    const { prefix, name, size, color } = toRefs(props)
    return () => (
      <svg
        class="th-icon"
        aria-hidden="true"
        style={{ width: size.value + 'px', height: size.value + 'px' }}
      >
        <use
          xlinkHref={`${prefix.value}${name.value}`}
          fill={color.value}
        ></use>
      </svg>
    )
  },
})
