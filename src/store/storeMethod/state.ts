import {UserState} from "@/typings/store/stateTypings";

/*
* 存放store state全局变量
* @param state
*/

const state: UserState = {
    UserInfo: {
        userId: null,
        userName: "",
        userAvatar: "",
    },
    RouterOptions: {
        options: [],
        acitveIndex: "/manage/home"
    },
    childrenTitle: ""
}

export default state