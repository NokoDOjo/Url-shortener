const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  urlCode: {
    type: String
  },
  inputUrl: {
    type: String
  },
  shortenUrl: {
    type: String
  }
})

module.exports = mongoose.model('UrlList', urlSchema)