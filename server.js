const express = require('express')
const app = express()
const marked = require('marked')
const hbs = require('express-handlebars')
const fs = require('fs')
const dir = require('node-dir')
const titleise = require('titleize')

let md = new marked.Renderer()
md.image = (href, title, caption) => `<img src='${href}' alt='${title}' data-action='zoom'>${caption ? `<span class='dim center caption'>${caption}</span>` : ``}`

marked.setOptions({
  highlight: code => require('highlight.js').highlightAuto(code).value,
  renderer: md,
  smartypants: false,
  sanitize: false,
})

app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs',
}))
app.set('view engine', 'hbs')

app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/assets'))

app.get('/', (req, res) => {
  res.render('landing', {
    title: 'Matt Francis',
    isLanding: true,
  })
})

app.get('/blog', (req, res) => {
  let posts = []

  dir.readFiles('posts', { match: /.+\.json/ }, (err, metadata, next) => {
    if(err) throw err

    let json = JSON.parse(metadata)
    posts.push(json)

    next()
  }, (err, files) => {
    if(err) throw err

    res.render('posts', {
      posts: posts.sort((a, b) => {
        if(a.date < b.date) return 1
        if(b.date < a.date) return -1
        else return 0
      }),
      sub: 'blog',
      title: 'Blog - Matt Francis'
    })
  })
})

app.get('/blog/:post', (req, res) => {
  try {
    let post = fs.readFileSync(`posts/${req.params.post}.md`, 'utf8')
    let meta = JSON.parse(fs.readFileSync(`posts/${req.params.post}.json`, 'utf8'))

    res.render('post', {
      title: titleise(meta.title + ' - Matt Francis'),
      content: marked(post),
      sub: 'blog',
      url: req.url,
      identifier: req.params.post,
      isPost: true,
      desc: meta.subtitle,
      img: meta.img
    })
  } catch(e) {
    res.status(404).render('404', { title: '404 - Matt Francis' })
  }
})

app.get('*', (req, res) => {
  res.status(404).render('404', { title: '404 - Matt Francis' })
})

app.listen(43210, () => console.log('listening @ http://localhost:43210'))
