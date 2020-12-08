import {createStore} from 'vuex'
import state from "./storeMethod/state"
import mutations from "./storeMethod/mutations"
import actions from "./storeMethod/actions"
import getters from "@/store/storeMethod/getters";

export default createStore({
    ...state, // 全局变量
    ...actions, // actions 公用方法
    getters: {...getters}, // getters get方法
    mutations: {...mutations}, // mutations set方法
    modules: {} // modules 模块
})
