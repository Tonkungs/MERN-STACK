const express = require('express')
// ตัว debug
const morgan = require('morgan')
// ตัวย่อการส่งข้อมูล
const compression = require('compression')
// ทำให้ส่ง post ได้
const bodyParser = require('body-parser')
// ไฟล์ config
// const config = require('./config')

module.exports = function () {
  const app = express()
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  } else {
    app.use(compression())
  }
  // รองรับ application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: true // false -> string กับ array
                        // true -> ประเภทใดก็ได้ เช่น nested array
  }))
    // รองรับ application/่json
  app.use(bodyParser.json())   
    // โยนพาราม app เข้าไป
  require('./../app/routes/index.routes')(app)
  app.use(express.static('./public'))
  return app
}
