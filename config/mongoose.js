const config = require('./config')
// ติดต่อ db
const mongoose = require('mongoose')

module.exports = function () {
  const db = mongoose.createConnection(config.mongoUri)
  return db
}
