import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

/*
 * @Author: your name
 * @Date: 2021-11-23 15:57:48
 * @LastEditTime: 2021-11-23 22:26:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \设计模式\design-pattern\src\router\index.ts
 */
export type AppRouteRecordRaw = RouteRecordRaw &{ hidden : false}
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: ()=>import('../views/Stragy-pattern.vue')
    },{
        path: '/template',
        component: ()=>import('../views/modules-pattern.vue')
    }]
})
router.beforeEach((to, from, next)=>{
    next()
})
export default router