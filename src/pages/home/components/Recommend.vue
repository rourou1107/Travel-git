<template>
  <div class="recommend">
    <div class="recommend-hot-title">热销推荐</div>
      <div
        :to="'/detail/' + item.id"
        class="recommend-list"
        v-for="item of list"
        :key="item.id"
        @click="handleClickRecommend(item.id)"
      >
          <div class="recommend-list-img">
            <img
              :src="item.src"
              class="list-img"
            />
          </div>
          <div class="recommend-list-desc">
            <div class="title">{{item.title}}</div>
            <div class="info">{{item.desc}}</div>
            <button class="btn">查看详情</button>
          </div>
      </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  computed: {
    ...mapState(['id'])
  },
  methods: {
    handleClickRecommend (id) {
      this.changeID(id)
      this.$router.push('/detail/' + id)
    },
    ...mapActions(['changeID'])
  }
}
</script>
<style lang="stylus" scoped>
  .recommend
    margin-top: .2rem
    .recommend-hot-title
      height: .8rem
      background-color: #eee
      line-height: .8rem
      padding-left: .3rem
    .recommend-list
      box-sizing: border-box
      padding: .1rem 0 .1rem .1rem
      height: 1.9rem
      display: flex
      .recommend-list-img
        width: 25%
        height: 100%
        .list-img
          height: 100%
    .recommend-list-desc
      flex: 1
      padding: .15rem 0 .2rem .3rem
      // min-width: 0 // flex布局下需要设置宽度才有省略号,或者overflow: hidden
      overflow: hidden
      .title
        height: .6rem
        line-height: .6rem
        font-size: .3rem
      .info
        height: .5rem
        line-height: .5rem
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
      .btn
        background-color: #ff9300
        width: 1.6rem
        height: .4rem
        border-radius: .15rem
        color: #fff
        font-size: .24rem
</style>
