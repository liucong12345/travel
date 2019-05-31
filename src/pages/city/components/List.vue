<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
	&:before
		border-color:#ccc
	&:after
		border-color:#ccc
.title{
	font-size:14px;
	background-color:#eee;
	height:0.5rem;
	line-height:0.5rem;
	color:#666;
}
.A_ul .button{
    font-size: 16px;
    border: 1px solid #ccc;
    width: 29%;
    border-radius: 5px;
    text-align: center;
    line-height: 0.4rem;
    margin: 2% 0 0% 2%;
}
.area ul.A_ul{
	overflow:hidden;
	margin-bottom:2%;
}
.area ul.A_ul li{
	float:left;
}

.B_ul{
	width:96%;
	margin:0 auto;
}
.B_ul li{
	padding-left:2%;
	font-size:14px;
	height:0.5rem;
	line-height:0.6rem;
	border-bottom:1px solid #ccc;
}
</style>


<template>
	<div class="list wrapper" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<ul class="A_ul">
					<li class="button">北京</li>
				</ul>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<ul class="A_ul">
					<li class="button" v-for="item of hot" :key="item.id">{{item.name}}</li>
				</ul>
			</div>
			<!-- 所有城市的数据 这里数据又嵌套，课后可以看看 -->
			<div class="area" v-for="(item,key) of zidingyiCities" :key="key">
				<div class="title border-topbottom">{{key}}</div>
				<ul class="B_ul">
					<li class="button" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script>
import BScroll from 'better-scroll'

export default{
	name:'CityList',
	props: {
		zidingyiCities:Object,
		hot:Array
	},
	mounted () {
		this.scroll = new BScroll(this.$refs.wrapper)
	}
	
}
</script>

