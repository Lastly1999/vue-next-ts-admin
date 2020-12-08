/*
 localStorage操作封装
 */

export class LocalStorage {
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