import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import mangeRouter from "./routers/manage/index"
import registered from "./config/index"

const routes: Array<RouteRecordRaw> = [
    // 主路口
    {
        path: '/login',
        name: 'login',
        component: registered("/login")
    },
    // 重定向主路口
    {
        path: '/',
        redirect: '/login'
    },
    // 路由中心
    ...mangeRouter,
]

// 创建实例
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
