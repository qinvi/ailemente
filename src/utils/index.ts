import { ComponentInternalInstance, getCurrentInstance } from 'vue'

export function useGlobalConfig(
  configName: string
): Record<string, any> | null {
  const instance: ComponentInternalInstance | null = getCurrentInstance()
  if (!instance) {
    console.log('useGlobalConfig 必须在 setup 里面')
    return null
  }
  return instance?.appContext.config.globalProperties[configName] || {}
}
