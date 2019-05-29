<style scoped>
	.swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>

<template>
	<div>55444</div>
	
	<!-- <swiper :options="swiperOptin">
		<swiper-slide>222</swiper-slide>
		<swiper-slide>222</swiper-slide>
		<swiper-slide>222</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-scrollbar" slot="scrollbar"></div>
	</swiper> -->
</template>

<script>
// 首页轮播组件
	export default{
		name:'HomeSwiper',
		data:function(){
			return {
				swiperOptin:{}
			}
		}
	}
</script>