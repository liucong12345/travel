
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.recommend-title
		font-size:16px;
		line-height:35px;
		text-indent:12px;
		background:#f5f5f5;
	.item
		border-bottom:5px solid #f5f5f5;
		width:100%;
		margin-left:7px;
		float:left;
		display:inline-grid;
	
	.item span{
		font-size:14px;
		color:#a5a2a2;
		margin: 7px 0;
		text-align:center;
		ellipsis();
	}
	.icon{
		float:left;
		width:30.6%;
		margin-left:2%;
	}
	.icon span{
		font-size:14px;
		color:#ccc;
		display: grid;
		text-align: center;
    	line-height: 25px;
	}
	
				
			
</style>

<template>
	<!-- <div>
		<div class="recommend-title">本周热榜单</div>
		<ul>
			<li class="item border-bottom" v-for="item of LuanList" :key="item.id">
				<img :src="item.imgUrl" alt="">
				<span>{{item.title}}</span>
			</li>
		</ul>
	</div> -->

	<div class="wrapper">
	  	<swiper >
	  		<swiper-slide class="" v-for="(page,index) of pages" :key="index">
	  			<div class="icon" v-for="item of page" :key="item.id">
	  				<img class="swiper-img" :src="item.imgUrl">
					<span>{{item.title}}</span>
	  			</div>
	        </swiper-slide>
	  		<div class="swiper-pagination" slot="pagination"></div>
	  	</swiper>
	</div>


</template>

<script>
	export default{
		name:"HomeLuan",
		data () {
			return {
				LuanList:[{
					id:"0001",
					imgUrl:"http://img1.qunarzz.com/sight/p0/1603/d6/d6c26678b2f50ecd90.water.jpg_250x250_09d86a10.jpg",
					title:"中山温泉"
				},{
					id:"0002",
					imgUrl:"http://img1.qunarzz.com/sight/p0/201403/07/228c4f111a52f45c3c69937813f384ae.jpg_250x250_e0c7da84.jpg",
					title:"中山影视城"
				},{
					id:"0003",
					imgUrl:"http://img1.qunarzz.com/sight/p0/201403/07/228c4f111a52f45c3c69937813f384ae.jpg_250x250_e0c7da84.jpg",
					title:"中山影视城"
				},{
					id:"0004",
					imgUrl:"http://img1.qunarzz.com/sight/p0/201403/07/228c4f111a52f45c3c69937813f384ae.jpg_250x250_e0c7da84.jpg",
					title:"中山影视城"
				},{
					id:"0005",
					imgUrl:"http://img1.qunarzz.com/sight/p0/201403/07/228c4f111a52f45c3c69937813f384ae.jpg_250x250_e0c7da84.jpg",
					title:"中山影视城"
				}]
				

			}
		},
		computed:{
			// 算有几个页面
			pages() {
				const pages = []
				this.LuanList.forEach((item,index) => {
					const page = Math.floor(index/3)
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
