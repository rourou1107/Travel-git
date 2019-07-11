<template>
  <div class="gallery-img" @click="handleGalleryClick">
    <swiper :options="swiperOption" class="swiper-img">
      <swiper-slide
        v-for="(item, index) of gallaryImgs"
        :key="index"
      >
        <img
          :src="item"
          class="img"
        />
      </swiper-slide>
      <div class="swiper-pagination pagination-font" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'DetailGallery',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .gallery-img
    z-index: 100
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: #000
    display: flex
    flex-direction: column
    justify-content: center
    .swiper-img
      height: 7rem
      width: 100%
      .img
        width: 100%
    .pagination-font
      color: #ffffff
</style>
