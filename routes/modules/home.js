const express = require('express')
const router = express.Router()
const UrlList = require('../../models/url')
const { randomUrlCode } = require('../../tools/utility')


router.get('/', (req, res) => {
  const urlBody = req.headers.host
  UrlList.find()
    .lean()
    .then(Url => {
      res.render('index', { Url, urlBody })
    })
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const inputUrl = req.body.url
  let urlCode = randomUrlCode()

  UrlList.find()
    .then(Url => {
      if (Url.find(url => url.inputUrl === inputUrl)) {
        return res.redirect('/')
      }
      while (Url.some(url => url.urlCode === urlCode)) {
        urlCode = randomUrlCode()
      }
      return UrlList.create({ urlCode, inputUrl })
      .then(() => res.redirect('/'))
      .catch(error => console.log(error))
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  UrlList.findOne({ urlCode: id })
    .lean()
    .then(Url => {
      if (!Url) {
        return res.redirect('/')
      }
      return res.render('show', { url: Url.inputUrl })
    })
    .catch(error => console.log(error))
})


module.exports = router