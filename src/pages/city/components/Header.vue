<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header{
	height:$headerHeight;
	line-height:$headerHeight;
	font-size:18px;
	background:$bgColor;
	text-align:center;
	color:#fff;
	position:relative;
}
.header .iconfont{
	position:absolute;
	left:3%;
	top:0;
	font-size:18px;
	color:#fff;
}
</style>

<template>
	<div class="header">
		<router-link to="./">
			<span class="iconfont">&#xe611;</span>
		</router-link>
		城市选择
	</div>
</template>


<script>
export default{
	name:'CityHeader'
	
}
</script>

