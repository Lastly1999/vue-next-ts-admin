import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
    RouteLocationNormalized,
    NavigationGuardNext,
    Router
} from 'vue-router'
import nProgress from 'nprogress' // nProgress加载进度条
import 'nprogress/nprogress.css' // nProgress进度条样式
import registered from "./config/index" // 注册中心
import mangeRouter from "./routers/manage/index" // 子路由

// nProgress 进度条配置
nProgress.configure({
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: true, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})

// 路由列表
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

// 创建Router实例
const router: Router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

// 监听路由变化 开启进度条加载
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.path == "/login") {
        // sessionStorage.removeItem('username');
    }
    let user = localStorage.getItem("userName")
    if (!user && to.path != "/login") {
        next({path: '/login'})
    } else {
        nProgress.start()
        next()
    }
})

// 路由加载完成之后关闭加载进度条
router.afterEach(() => {
    nProgress.done();
})


export default router
