const express = require('express')
const bodyParser = require('body-parser')
const powGenerator = new (require('./PowGenerator'))

const server = express()
const port = 3000
const urlencodedParser = bodyParser.urlencoded({ extended: false })

server.get('/', function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    console.log('Use POST request.')
    response.end('Use POST request.')
})

server.post('/', urlencodedParser, function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    const requestData = request.body.Schema
    console.log('Request: ', requestData)
    const pow = powGenerator.generateBy(requestData)
    console.log(pow)
    response.end('' + pow)
})

server.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
