import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/premission' // 引入premission组件
import store from './store'
import Vant from 'vant' // 引入vant组件
import plugin from '@/untils/plugin' // 引入插件
import 'vant/lib/index.less' // 引入vant组件样式 这里改成less 因为我们想改变样式
import 'amfe-flexible'
import '@/styles/index.less' // 引入自定义的样式 覆盖vant的样式
Vue.config.productionTip = false
Vue.use(Vant) // 全局注册  实际上调用了 Vant导出的对象的方法  install方法
Vue.use(plugin) // 注册组件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
