/**
 * 表格请求类 接口定义
 */
export interface TableListPerson {
    loadingFlag: boolean;
    tableHeader: Array<object>;
    tableData: Array<object>;
    limit: object;
    beingloadingFlag: () => void;
    notLoadingFlag: () => void;
    getTableList: () => void;
    editCol: (data: object) => void;
    removeCol: (data: object) => void;
}

/**
 * 分页器类 接口定义
 */
export interface PaginationPerson {
    params: PagiParamsPerson;
    switchPage: (limit: PagiLimitPerson) => void;
}

// limit 参数泛型
interface PagiLimitPerson {
    current: number;
    pageRange: number;
    pageSize: number;
    pageTotal: number;
    total: number;
}

// params 参数泛型
interface PagiParamsPerson {
    keywords: string;
    flag: string;
    pageSize: number;
    pageCurrent: number;
}

/**
 * 添加列表行类 接口定义
 */
export interface modalPerson {
    title: string;
    dialogShow: boolean;
    displayShow: (title: string) => void;
    hideShow: () => void;
}

/**
 * modal提示框操作类 接口定义
 */
export interface ModalPerson {
    modalSubmit: () => void;
    modalClear: () => void;
}
