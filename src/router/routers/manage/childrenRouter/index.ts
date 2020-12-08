/*
 * @Author: your name
 * @Date: 2020-11-23 15:19:49
 * @LastEditTime: 2020-12-05 15:56:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \adminboker_master\src\router\routers\manage\childrenRouter\index.ts
 */
import { RouteRecordRaw } from "vue-router";
import registered from "@/router/config";

const manageChildren: Array<RouteRecordRaw> = [
    {
        path: "/manage/table",
        name: "table",
        component: registered("/managePage/childrenPage/tableView")
    },
    {
        path: "/manage/map",
        name: "map",
        component: registered("/managePage/childrenPage/mapView")
    },
    {
        path: "/manage/treeSelect",
        name: "treeSelect",
        component: registered("/managePage/childrenPage/treeSelectView")
    },
]

export default manageChildren
