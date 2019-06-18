<template>
  <div>
    <ul>
      <li v-for="item in 5"
          :key="item">
        <span class="icon"
              :class="classMap[item-1]"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classMap: []
    }
  },
  props: ['i'],
  methods: {
    star () {
      let i = this.i
      this.classMap = []
      this.classMap.length = 0
      for (let j = 0; j < 5; j++) {
        if (i >= 1) {
          this.classMap.push('on')
          i--
          continue
        }
        if (i >= 0.5) {
          this.classMap.push('half')
          i--
          continue
        }
        if (i < 0.5) {
          this.classMap.push('off')
          i--
        }
      }
    }
  },
  created () {
    this.star()
  },
  watch: {
    i: function (newVal) {
      if (newVal) {
        this.star()
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
ul
  display: inline-block
  width: 110px
  li
    display: inline-block
    .icon
      display: inline-block
      vertical-align: top
      width: 20px
      height: 20px
      margin-right: 2px
      background-size: 15px 15px
      background: center
      background-repeat: no-repeat
      &.on
        bg-image('star24_on')
      &.half
        bg-image('star24_half')
      &.off
        bg-image('star24_off')
</style>
