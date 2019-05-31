 <!-- 单文件组件 -->
<template>
	<div>
		<!-- :city是父组件，然而子组件就要接收，子组件是header.vue -->
  		<home-header :city="city"></home-header>
  		<home-swiper :list="swiperList"></home-swiper>
  		<Home-icons :list="iconList"></Home-icons>
  		<Home-recommend :list="recommendList"></Home-recommend>
  		<Home-weekend :list="weekendList"></Home-weekend>
  		<Home-luan ></Home-luan>
  	</div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import HomeLuan from './components/Luan.vue'

import axios from 'axios'
//引入axios才能发ajax请求

export default{
	name:'Home',
	//声明组件
	components:{ 
		HomeHeader:HomeHeader,
		HomeSwiper:HomeSwiper,
		HomeIcons:HomeIcons,
		HomeRecommend:HomeRecommend,
		HomeWeekend:HomeWeekend,
		HomeLuan:HomeLuan
	},
	data () {
		return {
			city: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList:[]
			// LuanList:[]
		}
	},
	methods:{
		getHomeInfo () {
			//接口 ，index.js文件有些写了怎么转换为/api的
			axios.get('/api/index.json')
			.then(this.getHomeInfoSucc)
		},
		// res这个可以打印上面那个接口的所有数据
		getHomeInfoSucc (res) {
			if(res.data.ret && res.data.data){
				const data = res.data.data //这里是定义了一个变量
				this.city = data.city
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
				// this.LuanList = data.LuanList
			}
		}
	},
	mounted () {
		this.getHomeInfo()
	}
}
</script>

<style>
	
</style>