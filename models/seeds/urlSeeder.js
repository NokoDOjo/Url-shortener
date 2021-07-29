const UrlList = require('../url')
const db = require('../../config/mongoose')

db.once('open', () => {

    UrlList.create({ 
      urlCode: Math.random().toString(36).substr(2, 5),
      inputUrl: "https://www.youtube.com/?gl=TW&hl=zh-TW" 
    })

  console.log('urlSeeder.js is done')
})