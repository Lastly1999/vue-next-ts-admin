/**
 * store state接口约束
 */
export interface UserState {
    UserInfo: UserInfoPerson;
    childrenTitle: string;
    RouterOptions: OptionsPerson;
}

interface OptionsPerson {
    options: Array<object>;
    acitveIndex: string;
}

export interface UserInfoPerson {
    userId?: number | null;
    userName: string;
    userAvatar: string;
}