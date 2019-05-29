
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
  	<swiper :options="swiperOptin">
  		<swiper-slide v-for="item of swiperList" :key="item.id">
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
		data:function(){
			return {
				swiperOptin:{
                    pagination:'swiper-pagination',
                    loop:true
                },
                swiperList:[{
                        id:'0001',
                        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
                    },{
                        id:'0002',
                        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/6fe8e24861b0b17602dfe68db88f453b.jpg_750x200_22c2868c.jpg'
                    },{
                        id:'0003',
                        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/8f7bcfbd2ccdd8aaa116799a39c812c9.jpg_750x200_c41c49fb.jpg'
                    }
                ]
			}
		}
	}
</script>