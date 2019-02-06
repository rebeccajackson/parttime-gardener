const path = require('path')
const express = require('express')
const routes = require('./routes/route')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api', routes)

module.exports = server
