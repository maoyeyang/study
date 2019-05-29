const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p>'
const stripHTMLTags = str =>str.replace(/<[^>]*>/g,'')