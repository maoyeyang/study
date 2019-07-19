<template>
  <div class="">
    <p class="">Hi from {{ name }}</p>
    <NLink to='/'>
      Home page
    </NLink>
  </div>
</template>

<script>
export default {
  asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  head: {
    title: 'About Page'
  }
}
</script>

<style>
</style>
