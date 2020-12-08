import {RouteRecordRaw} from "vue-router";
import registered from "../../config"
import childrenRoute from "./childrenRouter/index"

const manageRouter: Array<RouteRecordRaw> = [
    {
        path: '/manage',
        name: "manage",
        component: registered("/managePage"),
        children: [
            {
                path: "",
                name: "home",
                component: registered("/managePage/childrenPage/homeView")
            },
            // 嵌套子菜单重定向默认首页
            ...childrenRoute
        ]
    }
]

export default manageRouter;