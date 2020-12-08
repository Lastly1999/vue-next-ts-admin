<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted, Ref, ref} from "vue"
import {changeTalbeList, GetTableList} from "@/service/api/tableHttp/index" // 导入请求
import tableList from "@/components/manageComp/table/index.vue" // 表格列表
import search from "@/components/manageComp/serachInput/index.vue"
import modal from "@/components/manageComp/dialog/index.vue"
import fromModel from "@/components/manageComp/fromModel/index.vue"
import headerData from "./headerJson" // 表头数据
import {
  modalPerson,
  PaginationPerson,
  TableListPerson
} from "@/typings/viewTyping/manageTyping/childrenTyping/tableViewTyping/tableViewTyping"
import {AntdNotice} from "@/utils/antd/antdNotice"; // 导入接口

export default defineComponent({
  components: {
    tableList,
    search,
    modal,
    fromModel
  },
  setup() {
    /**
     * 表格操作类
     */
    const tableListClass: TableListPerson = reactive<TableListPerson>({
      loadingFlag: false,
      tableHeader: [...headerData],
      tableData: [],
      limit: {},
      // 加载中
      beingloadingFlag: () => {
        tableListClass.loadingFlag = true
      },
      // 取消加载
      notLoadingFlag: () => {
        tableListClass.loadingFlag = false
      },
      // 获取数据
      getTableList: async () => {
        tableListClass.beingloadingFlag()
        await new GetTableList(paginationClass.params).httpPostRequest().then((res: any) => {
          tableListClass.tableData = res.cityList
          tableListClass.limit = res.limit
          tableListClass.notLoadingFlag()
        })
      },
      // 修改表格行内容
      editCol(dataCol: object) {
        fromDataClass.editList('修改数据', dataCol)
        console.log(dataCol)
      },
      // 删除表格行内容
      removeCol(dataCol: object) {
        console.log(dataCol)
      }
    })
    /**
     * 分页器请求类
     */
    const paginationClass: PaginationPerson = reactive<PaginationPerson>({
      params: {
        keywords: "",
        flag: "true",
        pageSize: 10,
        pageCurrent: 1
      },
      // 切换分页
      switchPage: (limit) => {
        paginationClass.params.pageCurrent = limit.current;
        tableListClass.getTableList()
      }
    })
    /**
     * 搜索框方法
     */
    const onSearch = (keywords: string): void => {
      paginationClass.params.keywords = keywords;
      tableListClass.getTableList()
    }
    /**
     * 弹窗操作类
     */
    const modalClass: modalPerson = reactive<modalPerson>({
      title: "",
      dialogShow: false,
      // 显示dialog
      displayShow: (title: string) => {
        modalClass.title = title
        modalClass.dialogShow = true
      },
      // 隐藏dialog
      hideShow: () => {
        fromDataClass.dialogData = {
          id: null,
          name: '',
          countrycode: '',
          district: '',
          population: 0,
          flag: ''
        }
        ruleFrom.value.$refs.ruleForm.clearValidate()
        modalClass.dialogShow = false
      },
    })
    /**
     * 表单操作类
     */
    const ruleFrom: Ref = ref(null)
    const fromDataClass = reactive({
      // 表单数据
      dialogData: {
        id: null,
        name: '',
        countrycode: '',
        district: '',
        population: 0,
        flag: ''
      },
      // 校验规则
      rules: {
        name: [{required: true, type: 'string', trigger: 'change'}],
        countrycode: [{required: true, type: 'string', trigger: 'change'}],
        district: [{required: true, type: 'string', trigger: 'change'}],
        population: [{required: true, type: 'number', trigger: 'change'}],
      },
      // 新增记录方法
      appendList: () => {
        modalClass.title = "新增记录"
        modalClass.dialogShow = true
      },
      // 修改记录方法
      editList: (title: string, data: object) => {
        modalClass.displayShow(title)
        fromDataClass.dialogData = JSON.parse(JSON.stringify(data))
      },
      // 校验通过后操作请求方法
      ruleFromSumbit: () => {
        new changeTalbeList(fromDataClass.dialogData).httpPostRequest().then((res: any) => {
          if (res.code == 200) {
            new AntdNotice('success', '修改成功', '').showNotice()
          }
        })
      }
    })
    /**
     * 初始化方法
     */
    onMounted(() => {
      tableListClass.getTableList()
    })
    return {
      ...toRefs(tableListClass), ...toRefs(paginationClass),
      onSearch, ...toRefs(modalClass), ...toRefs(fromDataClass), ruleFrom
    }
  }
})
</script>
<!-- view -->
<template>
  <div>
    <modal @clear="hideShow" :visible="dialogShow" :dialogTitle="title">
      <fromModel ref="ruleFrom" :rules="rules" :data="dialogData" @okSubmit="ruleFromSumbit"></fromModel>
    </modal>
    <!-- 搜索框 -->
    <a-row>
      <a-col>
        <search @searchInput="onSearch"></search>
      </a-col>
      <a-col style="margin-left: 10px">
        <a-button type="primary" @click="appendList">
          添加
        </a-button>
      </a-col>
    </a-row>
    <!-- 列表内容 -->
    <tableList @edit="editCol" @remove="removeCol" :data-source="tableData" :columns-source="tableHeader"
               :pagination="limit"
               :tableLoading="loadingFlag"
               @change="switchPage">
    </tableList>
  </div>
</template>
