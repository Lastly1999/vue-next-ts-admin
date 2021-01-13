import {HttpService} from "@/service/api";

/**
 * 获取属性导航菜单
 * @param null
 */
export const getTreeMenuList = () => {
    const url = "/getTreeMenuList"
    const params = {}
    return new HttpService().httpPost(params, url)
}

/**
 * 修改导航菜单
 * @param data
 */
export const editTreeMenu = (data: object) => {
    const url = "/editTreeMenuList"
    const params = {...data}
    return new HttpService().httpPost(params, url);
}

/**
 * 添加导航菜单
 * @param data
 */
export const addTreeMenu = (data: object) => {
    const url = "/addTreeMenuList"
    const params = {...data}
    return new HttpService().httpPost(params, url);
}

/**
 * 删除导航菜单
 * @param id
 */
export const delTreeMenu = (id: number) => {
    const url = "/delTreeMenuList"
    const params = {menuId: id}
    return new HttpService().httpPost(params, url);
}


