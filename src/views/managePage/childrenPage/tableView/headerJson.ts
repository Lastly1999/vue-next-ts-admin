const headerData: Array<object> = [
    {
        "id": 1,
        "dataIndex": "id",
        "title": "id"
    },
    {
        "id": 2,
        "dataIndex": "name",
        "title": "城市名称"
    },
    {
        "id": 3,
        "dataIndex": "countrycode",
        "title": "城市代号"
    },
    {
        "id": 4,
        "dataIndex": "district",
        "title": "行政区域"
    },
    {
        "id": 5,
        "dataIndex": "population",
        "title": "人口数量"
    },
    {
        "id": 6,
        "dataIndex": "flag",
        "title": "启用状态",
        "slots": {
            "customRender": "flag"
        }
    },
    {
        id: 7,
        title: '操作',
        key: 'action',
        slots: {customRender: 'action'},
        align: "center"
    },
]
export default headerData
