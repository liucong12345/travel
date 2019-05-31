
<!-- .wrapper >>> .swiper-pagination-bullet-active这个意思表示不受scoped的控制， -->
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff!important
.wrapper
    width:100%
    .swiper-img
        width:100%;
   
</style>

<template>
  <div class="wrapper">
    <!-- v-if="list.length" 解决第一次是空数组的问题，这样写不完美，所以改成用一个计算属性 -->
  	<swiper :options="swiperOptin" v-if="showSwiper">
  		<swiper-slide v-for="item of list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
  		<div class="swiper-pagination" slot="pagination"></div>
  	</swiper>
  </div>
</template>

<script>
// 首页轮播组件
	export default{
		name:'HomeSwiper',
    props:{ //从外部接收list这个数据
      list:Array
    },
		data (){
			return {
				swiperOptin:{
                    pagination:'swiper-pagination',
                    loop:true,
                    autoplay:false
                }
		    }
	  },
    //计算属性
    computed: {
      showSwiper () {
        return this.list.length
      }
    }
  }
</script>