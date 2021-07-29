const utility = {
  randomUrlCode () {
    let urlCode = Math.random().toString(36).substr(2, 5)
    return urlCode
  }
}

module.exports = utility