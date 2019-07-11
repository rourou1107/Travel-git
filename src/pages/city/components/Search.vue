<template>
  <div>
    <div class="search">
      <input
        placeholder="输入城市名或拼音"
        class="search-input"
        v-model="keywords"
      />
    </div>
    <!--这里要用v-show,因为在mounted执行时,keywords还为空,v-if不会被渲染出来,节点就为空,而v-show会渲染出来,只是不显示-->
    <!--better-scroll是作用在最外层的wrapper,而滚动是对下面的第一个子元素进行滚动,如果ul作为最外层,他的子元素是第一个li,
        没有超出父元素,是不会滚动的-->
    <div ref="wrapper"
         v-show="keywords"
         class="search-appear"
    >
      <ul>
        <li
          class="search-li"
          v-for="(item, index) of list"
          :key="index"
        >
          {{item}}
        </li>
        <li
          class="search-li"
          v-show="showList">输入的城市不存在,请重新输入</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      list: [],
      keywords: ''
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
  },
  computed: {
    showList () {
      return !this.list.length
    }
  },
  watch: {
    keywords () {
      if (!this.keywords) {
        this.list = []
      } else {
        this.list = []
        for (let key in this.cities) {
          this.cities[key].forEach((item) => {
            if (item.spell.indexOf(this.keywords) > -1 || item.name.indexOf(this.keywords) > -1) {
              this.list.push(item.name)
            }
          })
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .search
    height: .82rem
    line-height: .72rem
    background-color: #00bcd4
    text-align: center
    .search-input
      width: 90%
      height: .62rem
      line-height: .62rem
      border-radius: .1rem
      text-align: center
  .search-appear
    position: absolute
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    z-index: 99
    overflow: hidden
    background-color: #eee
    .search-li
      height: .6rem
      line-height: .6rem
      text-indent: .2rem
      background-color: #ffffff
</style>
