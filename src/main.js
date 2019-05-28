//C整个项目的入口文件
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //叫做引入router变量，当前目录下的router
import fastClick from 'fastclick' 
import './assets/style/reset.css'  //引入css文件
import './assets/style/border.css'  

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,   //这也是es6的语法
  components: { App }, //这是es6的写法{App：App}也可以这样写法，这是定义局部组件的使用，键和值一样的时候，就写一个就可以了{App}
  template: '<App/>'
})

//路由就是根据网址的不同，返回不同德内容给用户