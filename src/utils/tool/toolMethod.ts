
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