import {UserState} from "@/typings/store/stateTypings";
import {GettersPerson} from "@/typings/store/gettersTypings";

/*
* 存放store get方法
* @param getters
*/

const getters: GettersPerson = {
    getUserInfo(state: UserState) {
        return state.UserInfo;
    },
    getChildrenTitle(state: UserState) {
        return state.childrenTitle
    },
    getRouteOption(state: UserState) {
        return state.RouterOptions
    },
}


export default getters