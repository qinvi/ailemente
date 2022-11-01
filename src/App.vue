<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  <hr />

  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  <hr />
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  <el-container>
    <el-button type="primary"> 按钮 </el-button>
    <el-button type="success"> 按钮 </el-button>
    <el-button>按钮</el-button>
    <el-button size="small"> 按钮 </el-button>
  </el-container>
</template>
<script setup lang="ts">
import { reactive, watchEffect } from 'vue'

const target = {}
const receiverOuter = {}

const proxyReceiver = new Proxy(target, {
  set(target: any, key, value, receiver) {
    // let res = Reflect.set(target, key, value, receiver)
    target[key] = value
    // let res = Reflect.set(target, key, value, receiver)
    // console.log('set')
    return true
  },
})

Reflect.set(proxyReceiver, 'a', 2) // true
console.log(target, proxyReceiver, receiverOuter)
</script>

<style lang="scss">
body {
  width: 1000px;
  margin: 10px auto;
}
</style>
