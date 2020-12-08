import {Service} from "@/service/api/service"


// 轮播图请求类
export class GetBannerImages extends Service {
    constructor() {
        const url = "/getBannerList";
        const params = {}
        super(url, params);
    }

    // overload
    public httpPostRequest() {
        return super.httpPostRequest()
    }
}

// 登录请求类
export class LoginAction extends Service {
    constructor(data: any) {
        const url = "/loginAction";
        const params = {
            ...data
        }
        super(url, params);
    }

    // overload
    public async httpPostRequest() {
        return await super.httpPostRequest()
    }
}
