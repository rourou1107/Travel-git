<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <div v-for="item of list" :key="item.id">
      <div class="weekend-img">
        <img
          :src="item.src"
          class="list-img"
        />
      </div>
      <p class="weekend-location">{{item.title}}</p>
      <p class="weekend-desc">{{item.desc}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  .weekend-title
    height: .8rem
    background-color: #eee
    line-height: .8rem
    padding-left: .3rem
  .weekend-img
    margin-top: .1rem
    height: 2.8rem
    .list-img
      height: 100%
  .weekend-location
    height: .56rem
    line-height: .56rem
    text-indent: .2rem
  .weekend-desc
    height: .56rem
    line-height: .56rem
    text-indent: .2rem
    font-size: .24rem
</style>
