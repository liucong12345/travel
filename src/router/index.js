import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home.vue' //@表示src目录
import List from '@/pages/list/List' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //当用户访问跟路径的时候
      name: 'Home', //路由名字是Home
      component: Home  //helloworld这个组件
    },{
      path: '/list', 
      name: 'List', 
      component: List  
    }
  ]
})
