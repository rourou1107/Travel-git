<template>
  <ul>
    <li
      class="list-item"
      v-for="(item, index) of list"
      :key="index"
    >
      <span class="item-icon"></span>
      {{item.title}}
     <div v-if="item.children" class="item-child">
       <detail-list :list="item.children"></detail-list>
     </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  .list-item
    min-height: .6rem
    line-height: .6rem
    .item-icon
      display: inline-block
      position: relative
      top: .08rem
      left: .15rem
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
    .item-child
      min-height: .6rem
      line-height: .6rem
      padding-left: .4rem
</style>
