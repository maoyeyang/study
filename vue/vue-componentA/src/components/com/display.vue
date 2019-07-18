<template>
  <div ref="display">
  </div>
</template>

<script>
import Vue from 'vue'
import random from '../../utils/random_str'
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      html: '',
      js: '',
      css: '',
      component: null,
      id: 0
    }
  },
  methods: {
    getSource (source, type) {
      const regexp = new RegExp(`<${type}[^>]*>`)
      let openingTag = source.match(regexp)

      if (!openingTag) return ''
      else openingTag = openingTag[0]
      return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`))
    },
    splitCode () {
      this.js = this.getSource(this.code, 'script').replace(/export default/, 'return')
      this.css = this.getSource(this.code, 'style')
      this.html = `<div id="app">${this.getSource(this.code, 'template')}</div>`
    },
    renderCode () {
      this.splitCode()
      if (this.html !== '' && this.js !== "") {
        const parseStrToFunc = new Function(this.js)()
        parseStrToFunc.template = this.html
        const Component = Vue.extend(parseStrToFunc)
        this.component = new Component().$mount()
        this.$refs.display.appendChild(this.component.$el)

        if (this.css !== '') {
          const style = document.createElement('style')
          style.type = 'text/css'
          style.id = this.id
          style.innerHTML = this.css
          document.getElementsByTagName('head')[0].appendChild(style)
        }
      }
    },
    destoryCode () {
      const $target = document.getElementById(this.id)
      if ($target) {
        $target.parentNode.removeChild($target)
      }
      if (this.component) {
        this.$refs.display.removeChild(this.component.$el)
        this.component.$destory()
        this.component = null
      }
    }
  },
  mounted () {
    console.log(this.code)
    this.renderCode()
    console.log(random())
  },
  destroyed () {
    this.destoryCode()
  },
  watch: {
    code () {
      this.destoryCode()
      this.renderCode()
    }
  }
}
</script>

<style scoped>
</style>


