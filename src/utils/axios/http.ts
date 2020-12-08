/**
 * @author  Lastly
 * @time    2020/11/13
 * @title   http请求封装
 * @desc
 *
 */
import {Interceptors} from './request';
import {message} from 'ant-design-vue';   // 弹窗信息组件


export class HttpService {
    public axios: any;

    constructor() {
        // 获取axios实例
        this.axios = new Interceptors().getInterceptors();
    }

    public httpPost(params: any, url: any) {
        const body = {params: params} // 请求体序列化
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
     * 服务端状态处理,例如中断性异常,退出异常等等(与拦截器http握手状态注意区分,一般都能分清楚吧)
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
            // console.log(other);
        }
    }

}
