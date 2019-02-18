const path = require('path')
const express = require('express')
const users = require('./routes/users')
const months = require('./routes/months')
const veg = require('./routes/veg')
const authRoutes = require('./routes/auth')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api', veg)
server.use('/api', users)
server.use('/api', months)
server.use('/api', authRoutes)

module.exports = server
