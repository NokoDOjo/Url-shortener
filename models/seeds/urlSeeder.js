const UrlList = require('../url')
const db = require('../../config/mongoose')

db.once('open', () => {

  for ( let i = 0; i < 10; i ++) {
    UrlList.create({ 
      urlCode: Math.random().toString(36).substr(2, 5),
      inputUrl: "" 
    })
  }
  
  console.log('urlSeeder.js is done')
})

