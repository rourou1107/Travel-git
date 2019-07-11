<template>
  <ul class="alphabet">
    <li
      class="alphabet-list"
      v-for="(item, key) of cities"
      :key = "key"
      ref="listDOM"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{key}}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      timer: null,
      startY: 0
    }
  },
  updated () {
    this.startY = this.$refs.listDOM[0].offsetTop
  },
  methods: {
    handleTouchStart () {
      this.touchStatus = true // 1.可以减少性能消耗 2.防止别的地方也用到touchMove冲突
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer != null) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let endY = e.changedTouches[0].clientY
          let index = Math.floor((endY - this.startY) / 20)
          if (index >= 0 && index < this.$refs.listDOM.length) {
            this.$emit('move', index)
          }
        }, 16)
      }
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .alphabet
    position: absolute
    top: 0
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    color: #25a4bb
    .alphabet-list
      height: .4rem
</style>
