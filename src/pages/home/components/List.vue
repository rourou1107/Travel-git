<template>
  <div class="list">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items, index) of pages" :key="index">
        <div class="list-icon" v-for="item of items" :key="item.id">
          <img
            :src="item.src"
            class="icon-img"
          />
          <span class="icon-span">{{item.desc}}</span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-bottom" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeList',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        observer: true, // 当改变swiper样式或修改swiper的子元素时,自动初始化swiper
        observeParents: true // 当swiper的父元素变化时,自动初始化swiper
      }
    }
  },
  computed: {
    pages () {
      let page = []
      this.list.map((item, index) => {
        var num = Math.floor(index / 8)
        if (!page[num]) {
          page[num] = []
        }
        page[num].push(item)
      })
      return page
    }
  }
}
</script>
<style lang="stylus" scoped>
  .list >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .list >>> .swiper-pagination-bullet
    width: 6px
    height: 6px
  .list
    width: 100%
    .list-icon
      position: relative
      float: left
      width: 25%  // 用百分比比较好,用别的单位不同型号的手机会显示不同
      height: 0
      padding-bottom: 25% // 占位,防止抖动
      text-align: center
      .icon-img
        width: 60%
      .icon-span
        position: absolute
        left: 0
        right: 0
        bottom: .25rem
    .swiper-bottom
      bottom: 1px
</style>
