<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-list :list="categoryList"></detail-list>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailList from './components/List'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  computed: {
    ...mapState(['id'])
  },
  activated () {
    this.getInfo(this.id)
  },
  methods: {
    getInfo (id) {
      axios.get('/api/detail/banner' + id + '.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        res = res.data
        // console.log(res)
        this.bannerImg = res.bannerImg
        this.categoryList = res.categoryList
        this.gallaryImgs = res.gallaryImgs
        this.sightName = res.sightName
      }
    }
  }
}
</script>
<style lang="stylus" scoped></style>
