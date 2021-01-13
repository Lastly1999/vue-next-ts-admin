import {HttpService} from "@/service/api";

/**
 * 获取请求表格数据
 * @param data
 */
export const getAllTableList = (data: object) => {
    const url = "/getAllCityList"
    const params = {...data}
    return new HttpService().httpPost(params, url);
}

/**
 * 修改表格数据
 * @param data
 */
export const changeTalbeList = (data: object) => {
    const url = "/editCityList"
    const params = {...data}
    return new HttpService().httpPost(params, url)
}

/**
 * 添加表格数据
 * @param data
 */
export const appendTableList = (data: object) => {
    const url = "/appendCityList"
    const params = {...data}
    return new HttpService().httpPost(params, url)
}