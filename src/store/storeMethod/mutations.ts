import {UserInfoPerson, UserState} from "@/typings/store/stateTypings";
import {MutationsPerson} from "@/typings/store/mutationsTypings";

/*
* 存放store set方法
* @param mutation
*/

const mutations: MutationsPerson = {
    setUserInfo(state: UserState, data: UserInfoPerson): void {
        state.UserInfo = data
    },
    setChildrenTitle(state: UserState, data: string) {
        state.childrenTitle = data
    },
    appendOptions(state: UserState, data: object) {
        state.RouterOptions.options.push(data)
    },
    setOptionIndex(state: UserState, data: string) {
        state.RouterOptions.acitveIndex = data;
    }
}


export default mutations