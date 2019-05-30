import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

<<<<<<< HEAD
Vue.use(ElementUI, { locale })
=======
Vue.use(ElementUI, {locale})
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  el: '#app',
  router,
  store,
  render: h => h(App),
})
=======
    el : '#app',
    router,
    store,
    render : h => h(App)
})

>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
