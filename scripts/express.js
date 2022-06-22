const express = require('express')
const path = require('path')
var http = require('http')


const app = express() 
const port = process.env.PORT || 3000
app.set('port', port)

app.use('/', express.static(path.join(__dirname, '../dist')))

const server = http.createServer(app)
server.listen(port)
