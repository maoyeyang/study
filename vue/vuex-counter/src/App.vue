<template>
  <div id="app">
    <counter />
    <counter-borther />
  </div>
</template>

<script>
import Counter from './components/Counter'
import CounterBorther from './components/CounterBorther'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    'counter': Counter,
    'counter-borther': CounterBorther
  },
  methods: {
  },
}
</script>

<style>
</style>
