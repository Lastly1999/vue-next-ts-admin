import {notification} from "ant-design-vue"

// antd通知提醒栏类封装
export class AntdNotice {
    private readonly type: string;
    private readonly description?: any;
    private readonly message?: string;

    constructor(type: string, msg: any, text: any) {
        this.type = type;
        this.description = text;
        this.message = msg;
    }

    // 显示通知提醒方法
    public showNotice() {
        return notification[this.type]({
            message: this.message,
            description: this.description,
        });
    }
}