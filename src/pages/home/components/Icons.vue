<style lang="stylus" scoped>
	.icons
		overflow:hidden
		padding-bottom:7px;
		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%
			text-align:center
			margin-top:7px
		.icon p
			font-size:14px
		.icon img
			width:74%

			
			
</style>

<template>
	<div class="icons">
		<swiper >
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<img :src="item.imgUrl" alt="">
					<p>{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:"HomeIcons",
		props: {
			list: Array
		},
		computed:{
			// 算有几个页面
			pages() {
				const pages = []
				this.list.forEach((item,index) => {
					const page = Math.floor(index/8)
					if(!pages[page]){
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages;
			}
		},
	}
</script>

