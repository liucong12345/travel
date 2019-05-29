<!-- 1rem = html font-size = 50px -->

<style scoped>
	.header{
		display:flex;
		height:.86rem;
		background:#00bcd4;
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
	.header .header-right{
		float:right;
		font-size: 16px;
		width: 20%;
		text-align: center;
		line-height: 39px;
	}
	.back-icon{
		padding:0 5px;
	}
</style>

<!-- 我的stylus还木有安装好，所以这里写的还是css3样式，不能写less等样式 -->


<template>

	<div class="header">
  		<div class="header-left"><span class="iconfont">&#xe611;</span></div>
  		<div class="header-input"><span  class="iconfont back-icon">&#xe64d;</span>输入城市/景点/游玩主题</div>
  		<div class="header-right">城市<span class="iconfont">&#xe673;</span></div>
  	</div>
</template>


<script>
export default{
	name:'HomeHeader'
}
</script>

