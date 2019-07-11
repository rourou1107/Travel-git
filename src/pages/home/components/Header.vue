<template>
  <div class="header">
    <span class="iconfont header-icon">&#xe624;</span>
    <div class="header-search">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-city">
        {{city}}
        <span class="iconfont header-city-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
  .header
    height: .86rem
    line-height: .86rem
    background-color: #00bcd4
    display: flex
    .header-icon
      padding-left: .2rem
      color: #ffffff
      font-size: .4rem
    .header-search
      height: .6rem
      line-height: .6rem
      margin: .13rem .2rem
      padding: 0 .2rem
      color: #ccc
      flex: 1
      background-color: #ffffff
      border-radius: .15rem
    .header-city
      color: #ffffff
      padding-right: .1rem
      .header-city-icon
        font-size: .25rem
</style>
