<template>
  <div class="">
    {{$store.state.count}} times1
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  },
}
</script>

<style>
</style>
