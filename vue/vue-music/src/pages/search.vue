<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search-box ref="searchBox"
                    @query="onQueryChange"></v-search-box>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox';
export default {
  components: {
    'v-search-box': searchBox
  },
  methods: {
    onQueryChange () {

    }
  },
}
</script>

<style>
</style>
