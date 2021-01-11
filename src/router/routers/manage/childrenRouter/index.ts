/*
 * @Author: Lastly
 * @Date: 2020-11-23 15:19:49
 * @LastEditTime: 2020-12-05 15:56:43
 * @LastEditors: Please set LastEditors
 * @Description: manage路由下子路由嵌套
 * @FilePath: \adminboker_master\src\router\routers\manage\childrenRouter\index.ts
 */
import {RouteRecordRaw} from "vue-router";
import registered from "@/router/config";

const manageChildren: Array<RouteRecordRaw> = [
    {
        path:"/manage",
        redirect:"/manage/home"
    },
    {
        path: "/manage/home",
        name: "home",
        component: registered("/managePage/childrenPage/homeView"),
        meta: {
            title: "首页"
        }
    },
    {
        path: "/manage/table",
        name: "table",
        component: registered("/managePage/childrenPage/tableView"),
        meta:{
            title:"公用表格"
        }
    },
    {
        path: "/manage/map",
        name: "map",
        component: registered("/managePage/childrenPage/mapView"),
        meta:{
            title:"地图"
        }
    },
    {
        path: "/manage/treeSelect",
        name: "treeSelect",
        component: registered("/managePage/childrenPage/treeSelectView"),
        meta:{
            title:"树形选择器"
        }
    },
    {
        path: "/manage/soketText",
        name: "newsSoket",
        component: registered("/managePage/childrenPage/soketView"),
        meta:{
            title:"服务器命令"
        }
    },
    {
        path: "/manage/form",
        name: "form",
        component: registered("/managePage/childrenPage/menuManageView"),
        meta:{
            title:"公用表单"
        }
    },
    {
        path: "/manage/menuSet",
        name: "menuSet",
        component: registered("/managePage/childrenPage/menuSetView"),
        meta:{
            title:"导航菜单"
        }
    },
    {
        path: "/manage/wangedit",
        name: "wangedit",
        component: registered("/managePage/childrenPage/wangEditView"),
        meta:{
            title:"富文本编辑器"
        }
    }
]

export default manageChildren
