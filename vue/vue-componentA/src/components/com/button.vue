<template>
  <button @click="handle">
    <slot></slot>
  </button>
</template>

<script>
import bus from '../../common/bus';
export default {
  data () {
    return {
      msg: '我是button里面的数据'
    }
  },
  methods: {
    handle () {
      bus.$emit('todo', this.msg)
    }
  },
}
</script>

<style>
</style>
