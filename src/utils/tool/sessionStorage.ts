
interface SessionStoragePerson {
    sessionList: Array<object>;
    getAllSessionList: () => Array<object>;
    setSessionList: () => void;
}

export class SessionStorage implements SessionStoragePerson {
    sessionList!: Array<object>
    getAllSessionList() {
        const ln = window.sessionStorage.length
        for (let i = 0; i < ln; i++) {
            const key: any = window.sessionStorage.key(i)
            const value: any = window.sessionStorage.getItem(key);
            this.sessionList[i] = {
                key: key,
                value: value
            }
        }
        return this.sessionList
    }
    setSessionList() {
        window.sessionStorage.length
    }
}