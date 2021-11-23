<!--
 * @Author: your name
 * @Date: 2021-11-23 22:56:42
 * @LastEditTime: 2021-11-24 00:08:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \设计模式\design-pattern\src\components\MainView.vue
-->
<template>
    <n-grid x-gap="16" :cols="2">
    <n-gi>
      <router-link to="/">
        <n-card title="策略模式">
          <template #cover>
            <img src="../assets/pattern-strage.png" />
          </template>
        </n-card>
      </router-link>
    </n-gi>
    <n-gi>
      <router-link to="/template">
        <n-card title="模板方法模式">
          <template #cover>
            <img src="../assets/pattern-template.png" />
          </template>
        </n-card>
      </router-link>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>