<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list{
	position:fixed;
	right:0;
	top:15%;
	background-color:#f00;
	font-size:14px;
}
.list .item{
	padding:5px;
}
</style>

<template>
	<ul class="list">
		<!-- :key="key" 这里是用A  B  C D作为key值 -->
		<li class="item" v-for="(item,key) of zidingyiCities" :key="key">{{key}}</li>
	</ul>
</template>


<script>
export default{
	name:'CityAlphabet',
	props:{
		zidingyiCities:Object
	}
	
}
</script>

