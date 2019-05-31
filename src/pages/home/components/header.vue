<!-- 1rem = html font-size = 50px -->


<!-- @import '../../../assets/style/varibles.styl'这下面引入的太长了可以简写 -->
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header{
	display:flex;
	height:$headerHeight;
	background:$bgColor;
	color:#fff;
	font-size:0.4rem;
}
.header .header-left{
	float:left;
	font-size: 16px;
    width: 12%;
    text-align: center;
    line-height: 39px;
}
.header .header-input{
	flex:1;
	background-color:#fff;
	border-radius: 6px;
	border:1px solid #ccc;
	margin:6px 0px;
	color:#ccc;
	font-size: 14px;
	line-height: 31px;
}
.header a{
	width: 20%;
}
.header .header-right{
	float:right;
	font-size: 16px;
	text-align: center;
	line-height: 39px;
	color:#fff;
}
.back-icon{
	padding:0 5px;
}
</style>

<!-- 我的stylus还木有安装好，所以这里写的还是css3样式，不能写less等样式 -->


<template>

	<div class="header">
  		<div class="header-left">
  			<span class="iconfont">&#xe611;</span>
  		</div>
  		<div class="header-input">
  			<span  class="iconfont back-icon">&#xe64d;</span>输入城市/景点/游玩主题
  		</div>
  		<router-link to='/city'>
	  		<div class="header-right">
	  			{{this.city}}<span class="iconfont">&#xe673;</span>
	  		</div>
  		</router-link>
  	</div>
</template>


<script>
export default{
	name:'HomeHeader',
	props:{
		city:String
	},
}
</script>

