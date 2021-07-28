const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const UrlList = require('../../models/url')


router.get('/', (req, res) => {
  UrlList.find()
    .lean()
    .then(Url => {
      const inputUrlList = Url.filter(url => url.inputUrl.length !== 0)
      res.render('index', { inputUrlList })
    })
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const inputUrl = req.body.url
  UrlList.find()
    .then(Url => {
      if (Url.find(url => url.inputUrl === inputUrl)) {
        return res.redirect('/')
      }
    UrlList.updateOne({ inputUrl: ""}, { $set:{ 'inputUrl': inputUrl }})
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
    })
  // UrlList.updateOne({ inputUrl: ""}, { $set:{ 'inputUrl': inputUrl }})
  //   .then(() => res.redirect('/'))
  //   .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  UrlList.findOne({ urlCode: id })
    .lean()
    .then(Url => {
      return res.render('show', { url: Url.inputUrl })
    })
    .catch(error => console.log(error))
})


module.exports = router