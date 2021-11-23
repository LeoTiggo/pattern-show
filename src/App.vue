<!--
 * @Author: your name
 * @Date: 2021-11-23 14:46:41
 * @LastEditTime: 2021-11-24 00:33:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \设计模式\design-pattern\src\App.vue
-->
<template>
  <n-config-provider :hljs="hljs">
    <div class="main-view-area">
      <main-view></main-view>
    </div>
    <div class="code-show-area">
      <router-view></router-view>
    </div>
  </n-config-provider>
  <!-- <n-button type="success">Success</n-button> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import MainView from "./components/MainView.vue";

hljs.registerLanguage("javascript", javascript);
export default defineComponent({
  setup() {
    return {hljs};
  },
  components: {
    MainView,
  },
});
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-view-area {
  width: 500px;
  margin: 0 auto;
  margin-bottom: 16px;
}
/* 卡片样式 */
.n-card__content {
    width: 500px;
    margin: 0 auto;
    text-align: left;
} 
/* 路由放大 */
.router-link-active > .n-card{
  box-shadow: 1px 1px 10px #000;
    transform: scale(1.05,1.05);
}
</style>
