<template>
  <div id="app">
    {{$store.state.count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">+</button>
    <button @click="incrementAsync">+</button>
    {{eventOrOdd}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {

  },
  computed: {
    ...mapGetters(
      ['eventOrOdd']
    )
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
      this.$store.dispatch('decrement')
    },
    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    }
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
