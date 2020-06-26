<template>
  <div class="mk-code" v-html="code"></div>
</template>

<script>
import hljs from 'highlight.js'


let md = require('markdown-it')({
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`
      } catch (e) {}
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
  }
})

export default {
  props: {
    txt: String
  },
  computed: {
    code() {
      return md.render(this.txt)
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.mk-code {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>