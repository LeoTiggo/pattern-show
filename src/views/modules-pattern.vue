<!--
 * @Author: your name
 * @Date: 2021-11-23 16:09:51
 * @LastEditTime: 2021-11-24 00:26:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \设计模式\design-pattern\src\views\modules-pattern.vue
-->
<template>
  <div>
    <n-card title="模板方法模式" class="active">
      <n-tabs
        default-value="before"
        size="large"
        justify-content="space-evenly"
      >
        <n-tab-pane name="before" tab="Before">
          <n-code
            :code="BeforeCode"
            language="javascript"
          />
        </n-tab-pane>
        <n-tab-pane name="after" tab="After">
          <n-code
            :code="AfterCode"
            language="javascript"
          />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import beforeCode from '../staticCode/template/beforeCode'
import afterCode from '../staticCode/template/afterCode'
const BeforeCode = ref(beforeCode)
const AfterCode = ref(afterCode)
</script>