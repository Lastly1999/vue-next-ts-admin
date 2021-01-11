/**
 * store getters 接口约束
 */
export interface GettersPerson {
    getUserInfo: (state: any) => object;
    getChildrenTitle: (state: any) => string;
    getRouteOption: (state: any) => object;
}