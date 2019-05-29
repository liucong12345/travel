<!-- 单文件组件 -->
<template>
	<div>
  		<home-header></home-header>
  		<home-swiper></home-swiper>
  		<div>45</div>
  	</div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
export default{
	name:'Home',
	//声明组件
	components:{ 
		HomeHeader:HomeHeader,
		HomeSwiper:HomeSwiper
	}
}
</script>

<style>
	
</style>