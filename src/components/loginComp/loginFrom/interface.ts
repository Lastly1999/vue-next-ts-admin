/*
* @name:Lastly
* @date 2020/11/18
* interface loginFrom约束文件
*/

// 表单配置
export interface LoginFromConfigPerson {
    wrapperCol: object;
    savePws: boolean;
    autoLogin: boolean;
}

// 表单输入信息
export interface LoginFromPerson {
    userName: string;
    passWord: string;
}

// 表单数据
export interface LoginFromClassPerson {
    loginFrom: LoginFromPerson;
    judgeSave: (data: object) => void;
    loginAction: () => void;
}