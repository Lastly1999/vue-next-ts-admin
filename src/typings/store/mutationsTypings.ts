import {UserInfoPerson} from "@/typings/store/stateTypings";

/**
 * store Mutations 接口约束
 */
export interface MutationsPerson {
    setUserInfo: (state: any, data: UserInfoPerson) => void;
    setChildrenTitle: (state: any, data: string) => void;
    appendOptions: (state: any, data: object) => void;
    setOptionIndex: (state: any, data: string) => void;
}
