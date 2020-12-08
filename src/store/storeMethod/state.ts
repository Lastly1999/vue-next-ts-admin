/*
* 存放store state全局变量
* @param state
*/
const state: UserPerson = {
    UserInfo: {
        userId: null,
        userName: "",
        userAvatar: "",
    },
    childrenTitle: ""
}

// 接口定义
interface UserPerson {
    UserInfo: UserInfoPerson;
    childrenTitle: string;
}

interface UserInfoPerson {
    userId?: number | null;
    userName: string;
    userAvatar: string;
}

export default state