# Hello, World
## A metapost about Github Pages, Jekyll, and school

Once upon a time, I was tasked with the work of forking [barryclark/jekyll-now](https://github.com/barryclark/jekyll-now) and creating a blog (for _school_. what?). Me being me, I immediately asked if I could _not_ use Jekyll + Github Pages, and rather go for [my own solution](/writing), using Node (of course).

So, how could I replicate a site such as this in only one 1-hour lesson? Short answer: _I didn't_. Instead, I spent the entire evening - _4pm to around 11pm_ - working on this very site. And no, **I didn't do any homework besides that.**

Here's what I did.

### Doing what I was supposed to do
So I _did_ fork [barryclark/jekyll-now](https://github.com/barryclark/jekyll-now) into my own repo and immediately decided to not use it since I got this:

![so "beautiful"](/jekyll-now-directory-mess.png)

Although it may have worked - I never bothered to actually test the thing - using Github Pages without my own server (a [Linode](https://www.linode.com/), FYI) having to do a bunch of grunt work _did_ seem like a neat idea. My VPS already had [nginx](https://nginx.org/en/) & [Node](https://nodejs.org/en/) installed and was doing stuff with it, but `ssh`ing in didn't appeal to me at the time since I was at school (on a sandboxed Mac). And that wouldn't let me open Terminal, anyway.

### Finding ~~Nemo~~ a module
After spending my entire lunchtime & lesson doing basically nothing, I was at home. Time to find a simple blog module for Node so I can get this done with!

!["simple blog"](/npm-simple-blog.png)

[gschier/simple-blog](https://www.npmjs.com/package/simple-blog) looked nice, so I started with that.

```sh
$ npm install -S simple-blog
```

Alright, so let's check out this "_simple_ blogging platform." I've installed it, and... **oh**. Wait a second.

![simple != database setup](/are-you-kidding-me.png)

A Mongo database!? For a "simple" blogging platform!? What!? ...anyway, [I couldn't be bothered to install Mongo on my Fedora machine.](http://tecadmin.net/install-mongodb-on-centos-rhel-and-fedora/) Hahahahaha.

### Doing it myself
Like the [big kid I am](http://j.mp/2cNPZEP), I resolved to create my own solution! [(Obligatory XKCD)](https://xkcd.com/927/) This would be perfect! I'll use Express, Handlebars, Stylus, and Markdown! As with all of my projects!!

---

The first step on this journey, as of all journeys, was to choose [a webfont](https://fonts.google.com/specimen/Harmattan) [or two](https://fonts.google.com/specimen/Crimson+Text). This took way too long; it's my way of procrastinating. Please don't blame me for [my stupidity](https://scratch.mit.edu/projects/118515236/#fullscreen).

Next, I created `server.js`...

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(80, () => console.log('listening to the internet for interested persons'))
```

...and installed `express`...

```sh
$ npm init
$ npm install -S express
```

...and ran it...

```sh
$ node server
```

![It works!!!1!!!](/hello-world.png)

### Actually making the thing
I already had my awesome domain name - `alex.bates.is` - and wanted to do some kind of [domain hack](https://en.wikipedia.org/wiki/Domain_hack) with it. What better than `alex.bates.is/writing`, amirite?

I went ahead and setup routes, templates, and styling for it and made a test post titled "Nothing in Particular" made up of Lorem Ispum text for testing with. The result was a "simple" (haha) go-to-page-and-compile-the-markdown-for-that-post job: what you're looking at _right now_.

![](/3-hours-later.png)

If you're wondering, this is what was supposed to be my first blog post:

![I learned all the things.](/learned-nothing.png)

And, well, I have to complete one of these for the blog you're looking at right now. So here goes.

---

# Hello, World!
## 7 Sep 2016

**Starting point:** [My Github account](https://github.com/nanalan), my server, and my terrible website

**Target for this lesson?** To have a blog running ontop of Github & Jekyll

**Did I reach my target?** No, but can I change my target? I, uh, didn't use Github or Jekyll in the process of making this lovely blog

### Lesson Review

**How did I learn? What strategies were effective?**
I learnt that you can often do better than somebody tells you to do and you should probably ask them before _not_ doing what you were told. Effective strategies include, but are not limited to:
- not doing what I was told to do
- not listening
- ignoring
- asking questions
- spending an entire evening (and night) working on the same thing
- searching stack overflow 'til I found what I wanted

**What limited my learning?**
- time
- school computers
- procrastination

**Which habits do I need to work on?**
- taking the easier way out
- motivating myself

**What will I change for next time? How will I improve my learning?**
To be frank- not much at all. This site/blog has turned out _amazing_ and I really love it, so I wouldn't change it.

---

Besides, I'm quite proud of the fact that everything that composes this website (except the templating engine & server framework) was made by _moi_. That gives me comfort; and it looks awesome.

Now to do some homework.

`</metapost>`
