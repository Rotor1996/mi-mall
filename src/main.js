import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
//定义超时时间
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  //接口请求成功
  if(res.status == 0){
    return res.data;
    //未登录
  }else if(res.status == 10){
    window.location.href = '/#/login';
    //请求失败
  }else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);
Vue.config.productionTip = true
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
