import {HttpService} from "@/utils/axios/http"; // 导入封装请求
import {AntdNotice} from "@/utils/antd/antdNotice";

/**
 * 为Service层接口子类提供方法
 * @param Service类 服务层父类
 */
export class Service extends HttpService {
    private HttpService: any
    private readonly url: string
    private readonly params: any

    constructor(url: string, params: any) {  // 构造方法
        super() // 调用父类构造方法
        this.url = url
        this.params = params
    }

    // 公用请求方法
    public httpPostRequest() {
        return this.HttpService.httpPost(this.params, this.url)
    }

    // 登录接口请求判断
    public errorJudgment(res: any) {
        if (res.code === -200) new AntdNotice("error", res.msg, "").showNotice()
        if (res.code === 200) new AntdNotice("success", res.msg, "").showNotice()
        return res
    }
}
