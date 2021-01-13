/**
 * cookie 操作工具类
 */

interface CookieHandlePerson {
    readonly cookie: string[];
    getCookies: () => Array<string>;
    setCookies: (name: string, value: string, days: number) => void;
}

export class CookieHandle implements CookieHandlePerson {
    cookie: string[];
    constructor() {
        this.cookie = document.cookie.split(";")
    }
    /**
     * 获取所有cookie
     * @returns cookies
     */
    public getCookies() {
        return this.cookie;
    }
    /**
     * 
     * @param name cookie-name值
     * @param value cookie-value值
     * @param days 有效时间/天
     */
    public setCookies(name: string, value: string, days: number) {
        const exp: Date = new Date();
        exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
    }
}