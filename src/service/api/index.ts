/**
 * @author  Lastly
 * @time    2020/11/13
 * @title   http请求封装
 * @desc
 */
import {Interceptors} from '../../utils/axios/request';
import {message} from 'ant-design-vue';   // 弹窗信息组件


export class HttpService {
    public axios: any;

    constructor() {
        // 获取axios实例
        this.axios = new Interceptors().getInterceptors();
    }

    public httpPost(params: any, url: any) {
        const body = {...params} // 请求体序列化
        return new Promise((resolve, reject) => {
            this.axios.post(url, body).then((res: any) => {
                resolve(res)
            }).catch((err: any) => {
                reject(err)
                this.errorHandle(err)
            })
        })
    }


    /**
     * 服务端状态处理,中断性异常,退出异常等等
     * @param res
     */
    public errorHandle(res: any) {
        message.warn(res.msg);  // 统一谈服务端提示,我们提示统一由服务端提供
        // 状态码判断
        switch (res.code) {
            case -200:
                break;
            case -201:
                break;
            default:
        }
    }

}
