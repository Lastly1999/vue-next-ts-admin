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
      <searchInput class="input" @searchInput="search" />
      <addButton @add="add" />
    </div>
    <treeTable
      @edit="editCol"
      @remove="removeCol"
      :columns="headerSoure"
      :data="dataSoure"
      :scroll="{ y: 'calc(100vh - 60px' }"
    ></treeTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import {
  editTreeMenu,
  getTreeMenuList,
  addTreeMenu,
  delTreeMenu,
} from "@/service/api/homeHttp";
import { AntdNotice } from "@/utils/antd/antdNotice";
import "./style/index.scss";
import treeTable from "@/components/manageComp/treeTable/index.vue";
import headerSoure from "./headerJson";
import searchInput from "@/components/manageComp/serachInput/index.vue";
import formDialog from "@/components/manageComp/dialog/index.vue";
import treeMenuForm from "@/components/manageComp/treeMenuForm/index.vue";
import addButton from "@/components/manageComp/buttonGroup/index.vue";

export default defineComponent({
  name: "menuSetView",
  components: {
    treeTable,
    searchInput,
    formDialog,
    treeMenuForm,
    addButton,
  },
  setup() {
    const notice = new AntdNotice(); // 提示组件
    /**
     * 请求列表
     */
    const treeTableClass = reactive({
      headerSoure: [...headerSoure],
      dataSoure: [],
      getTableList: async () => {
        const { code, data }: any = await getTreeMenuList();
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
        menuName: [{ required: true, type: "string", trigger: "change" }],
        menuIcon: [{ required: true, type: "string", trigger: "change" }],
        menuPath: [{ required: true, type: "string", trigger: "change" }],
        menuParentName: [{ required: true, type: "string", trigger: "change" }],
      },
      removeForm: async (id: number) => {
        const { msg, code }: any = await delTreeMenu(id);
        if (code === 200) {
          notice.showNotice("success", msg, "");
        }
      },
      editForm: async (data: any) => {
        const { code, msg }: any = await editTreeMenu(data);
        if (code === 200) {
          notice.showNotice("success", msg, "");
        }
      },
      addForm: async (data: any) => {
        const { msg, code }: any = await addTreeMenu(data);
        if (code === 200) {
          notice.showNotice("success", msg, "");
        }
      },
      // 表单提交
      submit: async (submitData: any) => {
        console.log(submitData);
        if (submitData.menuId != null) {
          await formDialog.editForm(submitData);
        } else {
          await formDialog.addForm(submitData);
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
      removeCol: (record: any) => {
        formDialog.removeForm(record.menuId);
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
        dialogClass.showDialog();
        formDialog.formData = {
          menuId: null,
          menuParentId: 0,
          menuPath: "",
          roleId: 0,
          menuIcon: "",
          menuName: "",
          menuParentName: "",
        };
      },
      search: (val: string) => {
        console.log(val);
      },
    });
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
