import {HttpService} from "@/service/api";


/**
 * 登录请求
 * @param data
 */
export const loginAction = (data: object) => {
    const url = "/loginAction";
    const params = {...data};
    return new HttpService().httpPost(params, url)
}
