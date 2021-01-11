import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from "ant-design-vue"
import 'ant-design-vue/dist/antd.css';
import 'default-passive-events'

const app = createApp(App)
app.use(store).use(Antd).use(router).mount('#app');
