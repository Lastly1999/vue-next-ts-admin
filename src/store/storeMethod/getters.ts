/*
* 存放store get方法
* @param getters
*/
const getters: GettersPerson = {
    getUserInfo(state: any) {
        return state.UserInfo;
    },
    getChildrenTitle(state: any) {
        return state.childrenTitle
    }
}

// 接口定义
interface GettersPerson {
    getUserInfo: (state: any) => object;
    getChildrenTitle: (state: any) => string;
}


export default getters