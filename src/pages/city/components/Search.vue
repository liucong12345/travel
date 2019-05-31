<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search{
	height:$headerHeight;
	line-height:$headerHeight;
	font-size:18px;
	background:$bgColor;
	text-align:center;
	color:#fff;
	position:relative;
}
.search-input{
	width: 86%;
    line-height: 0.6rem;
    border-radius: 4px;
    padding: 0 2%;
    text-align:center;
    color:#666;
    font-size:14px;
}
</style>

<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入城市名或拼音">
	</div>
</template>


<script>
export default{
	name:'CitySearch'
	
}
</script>

