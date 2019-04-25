import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入重置样式
import './assets/css/reset.css'
// 引入全局样式
import './styles/common.scss'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
