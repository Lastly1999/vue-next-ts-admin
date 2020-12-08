interface CoolOperatingPerson {
    collFlag: boolean;
    openSider: () => void;
    closeSider: () => void;
}

interface MenuListPerson {
    menuList: Array<object>;
    getTreeMenu: () => object;
}

export {
    CoolOperatingPerson,
    MenuListPerson
}
