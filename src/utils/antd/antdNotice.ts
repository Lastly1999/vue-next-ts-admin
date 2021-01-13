import { notification, message } from "ant-design-vue"

// antd通知提醒栏类封装
export class AntdNotice {
    type!: string;
    description?: any;
    message?: string;

    // 显示通知提醒方法
    public showNotice(type: string, msg: any, description: any): any {
        return notification[type]({
            message: msg,
            description: description,
        });
    }
    public msgNotice(messType:string) {
    //    return message.open({
    //        content:"",

    //        type:type,
    //        duration:0,

    //     })
    }
}