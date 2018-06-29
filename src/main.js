
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/index.less'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
