import {Service} from "@/service/api/service";

/**
 * 请求表格数据请求
 */
export class GetTableList extends Service {
    constructor(data: object) {
        const url = "/getTableList"
        const params = {...data}
        super(url, params)
    }

    // overload
    public async httpPostRequest() {
        return await super.httpPostRequest()
    }
}

/**
 *  增删改操作请求
 */
export class changeTalbeList extends Service {
    constructor(data: object) {
        const url = "/changeTableList";
        const params = {...data}
        super(url, params);
    }

    // overload
    public async httpPostRequest() {
        return await super.httpPostRequest()
    }
}
