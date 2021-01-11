<template>
  <div>
    <modal @clear="hideShow" :visible="dialogShow" :dialogTitle="title">
      <fromModel ref="ruleFrom" :rules="rules" :data="dialogData" @okSubmit="ruleFromSumbit"></fromModel>
    </modal>
    <!-- 搜索框 -->
    <a-row style="margin-bottom: 10px">
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

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted, Ref, ref} from "vue"
import {changeTalbeList, getAllTableList} from "@/service/api/tableHttp/index" // 导入请求
import tableList from "@/components/manageComp/table/index.vue" // 表格列表
import search from "@/components/manageComp/serachInput/index.vue"
import modal from "@/components/manageComp/dialog/index.vue"
import fromModel from "@/components/manageComp/dialogFormModel/index.vue"
import headerData from "./headerJson" // 表头数据
import {
  modalPerson,
  PaginationPerson,
  TableListPerson
} from "@/typings/viewTyping/manageTyping/childrenTyping/tableViewTyping/tableViewTyping"// 导入接口
import {AntdNotice} from "@/utils/antd/antdNotice";

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
        tableListClass.beingloadingFlag() // 开启加载
        const {code, data}: any = await getAllTableList(paginationClass.params);
        if (code === 200) {
          tableListClass.tableData = data.list
          const {total} = data
          tableListClass.limit = {'total': total}
          tableListClass.notLoadingFlag() // 关闭加载
        }
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
    const ruleFrom: Ref = ref(null)

    /**
     * 表单操作类
     */
    const fromDataClass = reactive({
      // 表单数据
      dialogData: {
        id: null,
        name: '',
        countrycode: '',
        district: '',
        population: 0,
        flag: null
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
      ruleFromSumbit: async () => {
        const {code}: any = await changeTalbeList(fromDataClass.dialogData);
        if (code === 200) {
          new AntdNotice('success', '修改成功', '').showNotice()
          modalClass.hideShow() // 关闭dialog
          tableListClass.getTableList()
        }
      }
    })
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
          flag: null
        }
        ruleFrom.value.$refs.ruleForm.clearValidate()
        modalClass.dialogShow = false
      },
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
