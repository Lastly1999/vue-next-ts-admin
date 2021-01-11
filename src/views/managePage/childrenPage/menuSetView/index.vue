<template>
  <div class="menuSetView">
    <formDialog :dialogTitle="title" @clear="clearDialog" :visible="visible">
      <treeMenuForm
          :data="formData"
          @okSubmit="submit"
          :rules="rules"
          :tree-data="treeData"
      />
    </formDialog>
    <div style="margin-bottom: 20px">
      <searchInput class="input" @searchInput="search"/>
      <addButton @add="add"/>
    </div>
    <treeTable
        @edit="editCol"
        :columns="headerSoure"
        :data="dataSoure"
        :scroll="{ y: 'calc(100vh - 60px' }"
    ></treeTable>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted} from "vue";
import {editTreeMenu, getTreeMenuList} from "@/service/api/homeHttp";
import {AntdNotice} from "@/utils/antd/antdNotice";
import "./style/index.scss";
import treeTable from "@/components/manageComp/treeTable/index.vue";
import headerSoure from "./headerJson";
import searchInput from "@/components/manageComp/serachInput/index.vue";
import formDialog from "@/components/manageComp/dialog/index.vue";
import treeMenuForm from "@/components/manageComp/treeMenuForm/index.vue";
import addButton from "@/components/manageComp/buttonGroup/index.vue"


export default defineComponent({
  name: "menuSetView",
  components: {
    treeTable,
    searchInput,
    formDialog,
    treeMenuForm,
    addButton
  },
  setup() {
    /**
     * 请求列表
     */
    const treeTableClass = reactive({
      headerSoure: [...headerSoure],
      dataSoure: [],
      getTableList: async () => {
        const {code, data}: any = await getTreeMenuList();
        if (code == 200) {
          treeTableClass.dataSoure = data;
          formTreeSelect.treeData = data;
        }
      },
    });
    /**
     * dialog 操作
     */
    const dialogClass = reactive({
      title: "",
      visible: false,
      showDialog: () => {
        dialogClass.title = "修改导航菜单";
        dialogClass.visible = true;
      },
      clearDialog: () => {
        formDialog.formData = {
          menuId: null,
          menuParentId: 0,
          menuPath: "",
          roleId: 0,
          menuIcon: "",
          menuName: "",
          menuParentName: "",
        };
        dialogClass.visible = false;
      },
    });
    /**
     * dialog内表单
     */
    const formDialog = reactive({
      formData: {
        menuId: null,
        menuParentId: 0,
        menuPath: "",
        roleId: 0,
        menuIcon: "",
        menuName: "",
        menuParentName: "",
      },
      // 校验规则
      rules: {
        menuName: [{required: true, type: "string", trigger: "change"}],
        menuIcon: [{required: true, type: "string", trigger: "change"}],
        menuPath: [{required: true, type: "string", trigger: "change"}],
        menuParentName: [{required: true, type: "string", trigger: "change"}],
      },
      // 表单提交
      submit: async (submitData: object) => {
        const {code, msg}: any = await editTreeMenu(submitData);
        if (code === 200) {
          new AntdNotice("success", msg, "").showNotice();
        }
      },
    });
    /**
     * 表单修改操作
     */
    const formEditOrAdd = reactive({
      // 打开修改dialog
      editCol: (colData: object) => {
        dialogClass.showDialog();
        formDialog.formData = JSON.parse(JSON.stringify(colData));
        console.log(colData);
      },
    });
    /**
     * 表单树形下拉class
     */
    const formTreeSelect = reactive({
      treeData: [],
    });

    /**
     * 按钮组事件操作
     */
    const buttonGroupClass = reactive({
      add: () => {
        dialogClass.showDialog()
        formDialog.formData = {
          menuId: null,
          menuParentId: 0,
          menuPath: "",
          roleId: 0,
          menuIcon: "",
          menuName: "",
          menuParentName: "",
        }
      },
      search: (val: string) => {
        console.log(val)
      }
    })
    onMounted(() => {
      treeTableClass.getTableList();
    });
    return {
      ...toRefs(buttonGroupClass),
      ...toRefs(treeTableClass),
      ...toRefs(dialogClass),
      ...toRefs(formDialog),
      ...toRefs(formEditOrAdd),
      ...toRefs(formTreeSelect),
    };
  },
});
</script>
