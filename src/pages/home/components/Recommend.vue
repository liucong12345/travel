
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.recommend-title
		font-size:16px;
		line-height:35px;
		text-indent:12px;
		background:#f5f5f5;
	.item
		display:flex;
		padding:7px;
		.item-img
			width:100px;
			height:100px;
			margin-right:10px;
		.item-info
			flex:1;
			min-width:0
			.item-title
				font-size:16px;
				ellipsis();
			.item-desc
				font-size:14px;
				margin-top:10px;
				color:#a5a2a2;
				ellipsis();
			.item-button{
			    background: #ff9300;
			    padding: 2px 12px;
			    border: 1px solid #ccc;
			    border-radius: 4px;
			    color: #fff;
			}
</style>

<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"HomeRecommend",
		props: {
			list: Array
		}
	}
</script>
