<!-- 单文件组件 -->
<template>
	<div>
  		<home-header></home-header>
  		<home-swiper></home-swiper>
  		<Home-icons></Home-icons>
  	</div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'

export default{
	name:'Home',
	//声明组件
	components:{ 
		HomeHeader:HomeHeader,
		HomeSwiper:HomeSwiper,
		HomeIcons:HomeIcons
	}
}
</script>

<style>
	
</style>