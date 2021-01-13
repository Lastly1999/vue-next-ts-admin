
/**
 * localStorage 类实现
 */
interface LocalStoragePerson {
    readonly key: string | undefined;
    readonly value: string | undefined;
    readonly storageList: Array<object>;
    setStorage: (key: string, value: string) => void;
    getStorage: () => Array<object>;
    delStorage: (key: string) => void;
}
/*
 localStorage 工具类
 */
export class LocalStorage implements LocalStoragePerson {
    key: string | undefined
    value: string | undefined
    storageList: Array<object>
    constructor() {
        this.storageList = new Array()
    }
    // 设置Storage
    setStorage(key: string, value: string) {
        localStorage.setItem(key, value)
    }
    // 获取Storage
    getStorage(): Array<object> {
        let len: number = localStorage.length
        for (let i: number = 0; i < len; i++) {
            const getKey: string = localStorage.key(i) as string
            const getValue: string = localStorage.getItem(getKey) as string
            this.storageList[i] = {
                "key": getKey,
                "value": getValue
            }
        }
        return this.storageList;
    }

    // 删除Storage
    delStorage(key: string) {
        localStorage.removeItem(key)
    }
}