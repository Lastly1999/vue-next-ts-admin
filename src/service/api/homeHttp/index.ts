import {Service} from "@/service/api/service";

// 请求首页左侧树形菜单
export class GetTreeMenuList extends Service {
    constructor() {
        const url = "/getTreeMenu"
        const params = {

        }
        super(url, params)
    }
    // overload
    public async httpPostRequest() {
        return await super.httpPostRequest()
    }
}
