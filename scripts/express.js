const express = require('express')
const path = require('path')
var http = require('http')


const app = express() 
const port = process.env.PORT || 3000
app.set('port', port)

app.use('/', express.static(path.join(__dirname, '../dist')))

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error: {}
    })
})

const server = http.createServer(app)
server.listen(port)
