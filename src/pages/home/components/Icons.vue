<style lang="stylus" scoped>
	.icons
		background:green
		overflow:hidden
		padding-bottom:12px;
		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%
			text-align:center
			margin-top:12px
		.icon p
			font-size:16px
			margin-top:-5px
		.icon img
			width:80%

			
			
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
		data () {
			return {
				iconList:[{
						id:'0001',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'景点门票'
					},{
						id:'0002',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'中山必游'
					},{
						id:'0003',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'长江水世界'
					},{
						id:'0004',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'亲子游'
					},{
						id:'0005',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'农家度假'
					},{
						id:'0006',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'游乐场'
					},{
						id:'0007',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'广州融创'
					},{
						id:'0008',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'泡温泉'
					},{
						id:'0009',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'景点门票'
					},{
						id:'00010',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'景点门票'
					},
				]
			}
		},
		computed:{
			// 算有几个页面
			pages() {
				const pages = []
				this.iconList.forEach((item,index) => {
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

