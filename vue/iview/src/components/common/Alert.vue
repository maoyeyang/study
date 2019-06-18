<template>
  <div class="alert">
    {{msg}}
    <hr>
    <Button class="button"
            type="primary"
            @click="hidden">隐藏</Button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {

    }
  },
  props: ['msg'],
  methods: {
    hidden () {
      this.$emit('hidden')
    }
  },
}
</script>

<style lang="stylus" scoped>
.alert
  font-size: 30px
  text-align: center
  width: 300px
  height: 200px
  border: 1px solid #aaa
  border-radius: 5px
  position: fixed
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  z-index: 999
  background-color: rgba(0, 0, 0, 0.3)
</style>
