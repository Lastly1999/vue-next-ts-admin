import { RouteRecordRaw } from "vue-router";
import registered from "../../config"
import childrenRoute from "./childrenRouter/index"

const manageRouter: Array<RouteRecordRaw> = [
    {
        path: '/manage',
        component: registered("/managePage"),
        meta:{
            requiresAuth: true
        },
        children: [
            // 嵌套子菜单重定向默认首页
            ...childrenRoute
        ]
    }
]

export default manageRouter;