<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of imgUrl" :key="item.id">
        <img
          :src="item.url"
          class="swiper-img"
        />
      </swiper-slide>
      <div class="swiper-pagination swiper-bottom" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: true,
        loop: true
      },
      imgUrl: [
        {
          id: '0001',
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/c36914f22fdb82d2b8878cbf6dddac98.jpg_750x200_4a63da4b.jpg'

        }, {
          id: '0002',
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/7ea90b7bd72642e834ced3953e231e5e.jpg_750x200_b0c66e21.jpg'
        }, {
          id: '0003',
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/e02cceb2dbbfcd2871cdb7531cf311f1.jpg_750x200_63d3d88b.jpg'

        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background-color: #ffffff
  .swiper
    height: 0
    padding-bottom: 30%
    overflow: hidden
    .swiper-img
      width: 100%
    .swiper-bottom
      bottom: 6px
</style>
