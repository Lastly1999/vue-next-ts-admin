/**
 * @param routerPath
 * 视图文件名 路由器注册中心
 */
const registered = (routerPath: string) => {
    return () => import("@/views" + routerPath);
}

export default registered
