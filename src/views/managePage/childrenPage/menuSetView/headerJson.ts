const headerJson: Array<object> = [
    {
        "id": 1,
        "dataIndex": "menuId",
        "title": "菜单id",
    },
    {
        "id": 2,
        "dataIndex": "menuName",
        "title": "菜单名称",
    },
    {
        "id": 3,
        "dataIndex": "menuIcon",
        "title": "菜单图标",
    },
    {
        "id": 4,
        "dataIndex": "menuPath",
        "title": "菜单路径",
    },
    {
        "id": 5,
        "dataIndex": "menuParentName",
        "title": "所属父菜单",
    },
    {
        id: 6,
        title: '操作',
        key: 'action',
        slots: {customRender: 'action'},
        align: "center"
    },
]

export default headerJson