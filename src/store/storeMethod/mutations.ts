/*
* 存放store set方法
* @param mutation
*/
const mutations: MutationsPerson = {
    setUserInfo() {
        console.log("设置成功")
    },
    setChildrenTitle(state: any, data: string) {
        state.childrenTitle = data
    }
}

// 接口定义
interface MutationsPerson {
    setUserInfo: () => void;
    setChildrenTitle: (state: any, data: string) => void;
}


export default mutations