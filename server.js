'use strict'
process.env.NODE_ENV = process.env.NODE_ENV || 'devlopment'
// require คือ เอา code มาแปะ หน้านั้นๆ
// app.set พวกนี้จะทำงานต้อน runtime   คือ relative path 
// คือ require เอา code มาแปะ แล้ว path ถึงเปลี่ยน เพราะ app.set ทำงานตอนรัน
const mongoose = require('./config/mongoose')
const express = require('./config/express')

const db = mongoose()
const app = express()
const port = 3000

app.listen(port)

module.exports = app

console.log('====================================')
console.log(`Server running at http://localhost:${port}`)
console.log(process.env.NODE_ENV)
console.log('====================================')

// วิธีการเซ็ต NODE_ENV (ตัวแปร) window
// set NODE_ENV=devlopment
// set NODE_ENV=production
// mac linux
// export NODE_ENV= devlopment
// export NODE_ENV= production
