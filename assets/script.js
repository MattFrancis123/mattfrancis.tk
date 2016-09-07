'use strict'

// really simple lightbox for images /////////////////////////////////////

let overlay = document.querySelector('.overlay')
let imgs = document.querySelectorAll('main img')

for(let img of imgs) {
  let zoomed = false

  img.addEventListener('click', e => {
    zoomed = true

    if(zoomed) {
      overlay.classList.add('visible')
      img.classList.add('zoomed')

      // including caption & all
      let el = img.parentNode.cloneNode(true)
      img.parentNode.insertBefore(el, img.nextSibling) // img.after(el)
      img.style.opacity = 0

      let rect = img.getBoundingClientRect()
      let pos = {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft,
        width: el.clientWidth,
        height: el.clientHeight
      }

      el.style.position = 'fixed'

      /*
      el.style.top = pos.top + 'px'
      el.style.left = pos.left + 'px'
      el.style.width = pos.width + 'px'
      el.style.height = pos.height + 'px'
      */

      el.classList.add('viewing')

      el.style.top = '5%'
      el.style.left = '10%'
      el.style.width = '80%'
      el.style.height = 'auto'
      el.style.maxHeight = '80vh'

      el.addEventListener('click', e => {
        zoomed = false

        overlay.classList.remove('visible')
        img.classList.remove('zoomed')
        img.style.opacity = 1

        el.remove()
      })
    }
  })
}

//////////////////////////////////////////////////////////////////////////
