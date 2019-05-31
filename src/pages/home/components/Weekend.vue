
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.recommend-title
		font-size:16px;
		line-height:35px;
		text-indent:12px;
		background:#f5f5f5;
	.item
		border-bottom:5px solid #f5f5f5;
		.item-img
			width:100%;
			height:117px;
		.item-info
			margin:7px 7px 12px 7px;
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
		<div class="recommend-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"HomeWeekend",
		props: {
			list: Array
		}
	}
</script>
