<!-- 单文件组件 -->
<template>
	<div>
  		<home-header></home-header>
  	</div>
</template>

<script>
import HomeHeader from './components/Header.vue'
export default{
	name:'Home',
	//声明组件
	components:{ 
		HomeHeader:HomeHeader
	}
}
</script>

<style>
	
</style>