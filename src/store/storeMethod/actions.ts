/*
* 存放store 公用方法
* @param actions
*/
const actions: ActionsPerson = {
    pubMethod() {
        console.log("公用方法")
    }
}

// 接口定义
interface ActionsPerson {
    pubMethod: () => void;
}


export default actions