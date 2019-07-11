<template>
  <div>
    <div class="banner">
      <router-link to="/" class="banner-back" tag="div">&lt;</router-link>
      <div  @click="handleBannerClick">
        <img
          :src="bannerImg"
          class="banner-img"
        />
      </div>
      <div class="banner-desc">
        <p class="banner-title">{{sightName}}</p>
        <p class="iconfont banner-icon">
          &#xe634;
          <span>{{gallaryImgs.length}}</span>
        </p>
      </div>
    </div>
    <detail-gallery :gallaryImgs="gallaryImgs"
                    :showData="showData"
                    v-if="showData"
                    @close="close"
    ></detail-gallery>
  </div>
</template>
<script>
import DetailGallery from './Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showData: false
    }
  },
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  components: {
    DetailGallery
  },
  methods: {
    handleBannerClick () {
      this.showData = true
    },
    close (showData) {
      this.showData = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    height: 0
    padding-bottom: 55%
    .banner-back
      position: absolute
      top: .2rem
      left: .2rem
      width: .9rem
      height: .9rem
      line-height: .9rem
      border-radius: .5rem
      background-color: rgba(0, 0, 0, 0.7)
      color: #ffffff
      text-align: center
      font-size: .6rem
    .banner-desc
      width: 100%
      position: absolute
      bottom: 0
      display: flex
      font-size: .35rem
      color: #ffffff
      padding: .15rem 0
      background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
      .banner-title
        text-indent: .2rem
        flex: 1
      .banner-icon
        padding-right: .2rem
    .banner-img
      width: 100%
</style>
