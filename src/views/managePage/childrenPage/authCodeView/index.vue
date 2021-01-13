<template>
  <div class="authView">
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="图形验证码">
        <div class="authCode">
          <a-input
            style="width: 200px"
            v-model:value="inputVal"
            placeholder="请输入验证码校验"
            allow-clear
          />
          <a-button type="primary" @click="checkCode"> 验证 </a-button>
          <div class="authCodeBox" @click="refreshCode">
            验证码:<authCode
              style="display: inline-block"
              :identifyCode="identifyCode"
            />
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="手机验证码" force-render>
        <telAuthCode
          @telCheckClick="telCheck"
          :tel="tel"
          btnType="primary"
          text="请输入手机号码"
          >确认</telAuthCode
        >
        <a-textarea
          style="margin-top: 10px"
          v-model:value="value2"
          placeholder="验证码预览，该信息为测试用途"
          allow-clear
        />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import authCode from "@/components/manageComp/authCode/index.vue";
import telAuthCode from "@/components/manageComp/telAuthCode/index.vue";
export default defineComponent({
  name: "auth",
  components: {
    authCode,
    telAuthCode,
  },
  setup() {
    /**
     *  验证码验证模块
     */
    const authCodeForm = reactive({
      inputVal: "", // 输入的验证码
      identifyCode: "", // 验证码
      identifyCodes: "1234567890abcdefjhijklinopqrsduvwxyz", // 表示从这些字符串里生成验证码
      // 刷新验证码
      refreshCode: () => {
        authCodeForm.identifyCode = "";
        authCodeForm.makeCode(authCodeForm.identifyCodes, 6);
      },
      // 返回一个从0到验证码字段长度的随机数字
      randomNum: (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min) + min);
      },
      // 生成随机验证码
      makeCode: (o: string, l: number) => {
        for (let i = 0; i < l; i++) {
          authCodeForm.identifyCode +=
            authCodeForm.identifyCodes[
              authCodeForm.randomNum(0, authCodeForm.identifyCodes.length)
            ];
        }
        console.log(authCodeForm.identifyCode);
      },
      // 验证码校验
      checkCode: () => {
        if (authCodeForm.inputVal == authCodeForm.identifyCode) {
          alert("验证通过");
        } else {
          alert("验证码错误");
        }
      },
    });
    /**
     * 手机验证码模块
     */
    const telAuthCodeForm = reactive({
      telCheck: (tel: string) => {
        console.log(tel);
      },
    });
    onMounted(() => {
      authCodeForm.refreshCode();
    });
    return { ...toRefs(authCodeForm), ...toRefs(telAuthCodeForm) };
  },
});
</script>

<style lang="scss">
.authView {
  background: #fff;
  padding: 30px;
  .ant-tabs-nav .ant-tabs-tab {
    height: auto !important;
  }
  .authCodeBox {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
}
</style>