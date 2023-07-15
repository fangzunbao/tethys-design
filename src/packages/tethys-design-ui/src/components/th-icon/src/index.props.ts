export default {
  /* xlink:href属性值的前缀 */
  prefix: { type: String, default: () => '#icon-' },

  /* 图标的名字 */
  name: { type: String },

  /* 图标大小 */
  size: { type: Number, default: 16 },

  /* 图标颜色 */
  color: { type: String, default: '#5b5b5b' },
}
