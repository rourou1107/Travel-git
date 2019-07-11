<template>
  <div class="list wrapper" ref="wrapper">
    <div class="content">
      <div class="list-current">
        <div class="current-city">当前城市</div>
        <button class="btn">{{city}}</button>
      </div>
      <div class="list-hot">
        <div class="hot-city">热门城市</div>
        <div class="hot-btn">
          <button
            class="btn"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
          {{item.name}}
          </button>
        </div>
      </div>
      <div class="list-all">
        <div v-for="(items, key) of cities" :key="key" ref="alphabet">
          <div class="all-city">{{key}}</div>
          <div
            class="list-city"
            v-for="item of items"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    index: Number
  },
  data () {
    return {}
  },
  computed: {
    // mapState()函数返回的是一个对象,使用结构运算符,将对象中的属性/方法放出来
    // ...mapState(['city']) 当计算属性的名称与state节点的名称相同时,可以用数组表示
    ...mapState({
      city: function () {
        return this.$store.state.city
      }
    })
  },
  mounted () {
    // this.scroll = new BScroll(DOM)就可以
    this.scroll = new BScroll(this.$refs.wrapper, {click: true}) // this.$refs.XXX是获取DOM元素
  },
  methods: {
    ...mapActions(['changeCity']), // 将this.changeCity映射为this.$store.dispatch('changeCity')
    handleCityClick (name) {
      // this.$store.dispatch('changeCity', name)
      this.changeCity(name)
      this.$router.push('/') // this.$router表示全局路由对象
    }
  },
  watch: {
    index () {
      // this.scroll.scrollToElement(DOM)作用是滚动到指定的DOM元素处
      this.scroll.scrollToElement(this.$refs['alphabet'][this.index])
    }
  }
}
</script>
<style lang="stylus" scoped>
  .list
    position: absolute
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .list-current
      height: 1.3rem
      .current-city
        height: .5rem
        line-height: .5rem
        background-color: #eee
        text-indent: .2rem
      .btn
        min-width: 1.8rem
        height: .5rem
        margin: .15rem .2rem
        border-radius: .1rem
        background-color: #ffffff
        border: 1px solid #ccc
    .hot-city
      height: .5rem
      line-height: .5rem
      background-color: #eee
      text-indent: .2rem
    .btn
      min-width: 1.8rem
      height: .5rem
      margin: .15rem .2rem
      border-radius: .1rem
      background-color: #ffffff
      border: 1px solid #ccc
    .all-city
      height: .5rem
      line-height: .5rem
      background-color: #eee
      text-indent: .2rem
    .list-city
      height: .7rem
      line-height: .7rem
      border-bottom: 1px solid #eee
      text-indent: .2rem
</style>
