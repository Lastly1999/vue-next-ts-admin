<template>
  <div class="loginFrom">
    <a-form
      layout="horizontal"
      :model="loginFrom"
      @submit="loginAction"
      :wrapper-col="wrapperCol"
    >
      <h1 id="loginFromTitle">登录</h1>
      <div id="loginFromInput">
        <a-form-item>
          <a-input v-model:value="loginFrom.userName" placeholder="Username">
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-model:value="loginFrom.passWord"
            type="password"
            placeholder="Password"
          >
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
      </div>
      <a-form-item>
        <a-checkbox v-model:checked="savePws"> 保存密码 </a-checkbox>
        <a-checkbox v-model:checked="autoLogin"> 自动登录 </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="loginFrom.userName === '' || loginFrom.passWord === ''"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { LoginFromConfigPerson, LoginFromClassPerson } from "./interface";
import { loginAction } from "@/service/api/loginHttp/index";
import { AntdNotice } from "@/utils/antd/antdNotice";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import "./index.scss";
import { UserOutlined } from "@ant-design/icons-vue";

const loginFrom = defineComponent({
  name: "loginFrom",
  components: {
    UserOutlined,
  },
  setup() {
    const router = useRouter();
    const store = useStore(); 
    const notice = new AntdNotice();
    // 表单配置
    const loginFromConfigClass: LoginFromConfigPerson = reactive<LoginFromConfigPerson>(
      {
        wrapperCol: { span: 24 }, // 表单内col属性 栅格布局
        savePws: true, // 保存密码勾选
        autoLogin: false, // 自动登录勾选
      }
    );
    // 表单数据
    const loginFromClass: LoginFromClassPerson = reactive<LoginFromClassPerson>(
      {
        loginFrom: {
          userName: localStorage.getItem("userName") || "",
          passWord: localStorage.getItem("passWord") || "",
        },
        // 判断是否保存账号密码
        judgeSave: (data: object) => {
          if (loginFromConfigClass.savePws) {
            localStorage.setItem("userName", loginFromClass.loginFrom.userName);
            localStorage.setItem("passWord", loginFromClass.loginFrom.passWord);
            store.commit("setUserInfo", data);
          } else {
            localStorage.removeItem("passWord");
          }
        },
        // 登录请求
        loginAction: async () => {
          const { code, msg, data }: any = await loginAction(
            loginFromClass.loginFrom
          );
          if (code == 200) {
            notice.showNotice("success", msg, "");
            loginFromClass.judgeSave(data);
            console.log(store.getters.getUserInfo);
            await router.push("/manage");
          } else {
            notice.showNotice("error", msg, "");
          }
        },
      }
    );
    return { ...toRefs(loginFromClass), ...toRefs(loginFromConfigClass) };
  },
});

export default loginFrom;
</script>

