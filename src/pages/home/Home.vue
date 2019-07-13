<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-list :list="iconList"></home-list>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeList from './components/List'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('api/index.json').then((res) => {
        res = res.data.data
        this.iconList = res.iconList
        this.recommendList = res.recommendList
        this.weekendList = res.weekendList
      })
    }
  }
}
</script>
<style></style>
