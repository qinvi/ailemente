<template>
  <div class="el-notification" :style="positionStyle" @click="onClickHandler">
    <div class="el-notification__title">{{ title }}</div>
    <div class="el-notification__message">{{ message }}</div>
    <button
      v-if="showClose"
      class="el-notification__close-button"
      @click="onCloseHandler"
    ></button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ElNotification',
}
</script>

<script setup lang="ts">
import { getCurrentInstance, ref, computed } from 'vue'

interface Props {
  type?: string // 弹窗类型
  verticalOffset?: number // 垂直方向偏移距离
  title?: string // 标题
  message?: string // 消息主体
  position?: string // 位置
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  verticalOffset: 0,
  title: '标题',
  message: '消息主体',
  position: '',
})
const instance = getCurrentInstance()
const visible = ref(true)
const verticalOffsetVal = ref(props.verticalOffset)

const typeClass = computed(() => {
  return props.type ? `el-icon-${props.type}` : ''
})
// 水平方向类
const horizontalClass = computed(() => {
  return props.position.endsWith('right') ? 'right' : 'left'
})
// 垂直方向类
const verticalProperty = computed(() => {
  return props.position.startsWith('top') ? 'top' : 'bottom'
})
const positionStyle = computed(() => {
  return {
    [verticalProperty.value]: `${verticalOffsetVal.value}px`,
  }
})
</script>

<style lang="scss">
@import '@styles/mixin.scss';

.el-notification {
  position: fixed;
  right: 10px;
  top: 50px;
  width: 330px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>
