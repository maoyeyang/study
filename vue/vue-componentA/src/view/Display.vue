<template>
  <div>
    <h3>动态渲染vue组件</h3>
    <i-display :code="code"></i-display>
  </div>
</template>

<script>
import iDisplay from '../components/com/display'
import defaultCode from './default-code'
export default {
  components: {
    iDisplay
  },
  data () {
    return {
      code: defaultCode
    }
  }
}
</script>

<style>
</style>
