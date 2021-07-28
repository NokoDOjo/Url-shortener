const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  urlCode: {
    type: String
  },
  url: {
    type: String
  }
})

module.exports = mongoose.model('Url', urlSchema)