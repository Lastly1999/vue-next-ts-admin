/*
 * @Author: your name
 * @Date: 2020-12-01 19:57:24
 * @LastEditTime: 2020-12-03 22:02:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \adminboker_master\src\utils\tool\toolMethod.ts
 */
/*
 localStorage操作封装
 */

export class ToolMethod {
    private readonly key: string;
    private readonly value: any;

    constructor(key: string, value?: any) {
        this.key = key;
        this.value = value;
    }

    // 设置Storage
    setStorage() {
        window.localStorage.setItem(this.key, this.value)
    }

    // 获取Storage
    getStorage() {
        return window.localStorage.getItem(this.key)
    }

    // 删除Storage
    delStorage() {
        window.localStorage.removeItem(this.key)
    }
}

/**
 * 递归查找数组对象内相同元素
 * @param list 要查找的数组
 * @param key  要查找的key值
 */
export const getParentId = (list: any, key: any): any | undefined => {
    for (const o of list || []) {
        if (o.menuPath == key) return o
        const o_ = getParentId(o.children, key)
        if (o_) return o_
    }
}
/**
 * 递归查找数组对象内相同元素
 * @param list 要查找的数组
 * @param key  要查找的key值
 */
export const getParentObj = (list: any, key: any): any | undefined => {
    for (const o of list || []) {
        if (o.menuId == key) return o
        const o_ = getParentObj(o.children, key)
        if (o_) return o_
    }
}