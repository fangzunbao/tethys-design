<template>
  <!-- 使用自定义组件 -->
  <div class="container">
    <th-button type="default" loading @click="handleClick">默认按钮</th-button>
    <th-button type="primary" @click="handleClick">普通按钮</th-button>
    <th-button type="success" @click="handleClick">成功按钮</th-button>
    <th-button type="warning" disabled @click="handleClick">警告按钮</th-button>
    <th-button type="danger" @click="handleClick">危险按钮</th-button>
    <th-button type="mimicry" disabled @click="handleClick">拟态按钮</th-button>
    <th-button icon="Star" type="primary" @click="handleClick" />
    <th-icon name="Star"></th-icon>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>
<script setup lang="ts">
const handleClick = () => {
  console.log('使用者触发')
}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
