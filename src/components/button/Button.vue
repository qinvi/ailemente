<template>
  <button
    class="el-button"
    :class="[
      buttonSize ? `el-button--${buttonSize}` : '',
      type ? `el-button--${type}` : '',
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'ElButton',
}
</script>

<script setup lang="ts">
import { useGlobalConfig } from '@src/utils'
import { computed } from 'vue'

interface Props {
  size?: '' | 'small' | 'medium' | 'large'
  type?: '' | 'primary' | 'success' | 'danger'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'small',
  type: '',
})

const globalButtonConfig = useGlobalConfig('$AILEMENT')
const buttonSize = computed(() => {
  return props.size || (globalButtonConfig as Record<string, any>).size
})
</script>
