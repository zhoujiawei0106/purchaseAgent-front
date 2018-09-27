import Vue from "vue"
import VueRouter from "vue-router"

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

// 使用懒加载路由配置
let routes = [{
  path: '/login',
  component: resolve => require(['./page/login.vue'], resolve),
  name: '',
  hidden: true
}, {
  path: '/404',
  component: resolve => require(['./page/404.vue'], resolve),
  name: '',
  hidden: true
}, {
  path: '/home',
  component: resolve => require(['./page/home.vue'], resolve),
  name: '导航一',
}];

var router = new VueRouter({
  routes
})
export default router;
