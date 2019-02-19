// server/routes/auth.js

const express = require('express')
const router = express.Router()
const db = require('../db/db')

const verifyJwt = require('express-jwt')
const token = require('../auth/token')

router.use(express.json())
router.use(userError)

router.post('/register', register, token.issue)


function register (req, res, next) {
  router.use(
    verifyJwt({ secret: process.env.GARDEN_ENV })
  )
  const {username, password} = req.body
  db.createUser({username, password})
  .then(([id]) => {
    res.locals.userId = id
    next()
  })
  .catch(({message})=>{
    if (message.includes('UNIQUE constraint failed: users.username')) {
      return res.status (400).json({
        ok:false,
        message: 'Username already exists'
      })
    }
    res.status(500).json({
      ok: false,
      message: 'Don\'t know what went wrong'
    })
  })
}

router.post('/login', login) 

function login (req, res) {
  const {username} = req.body
  db.getUserIdByName(username)
  .then(user => {
    res.locals.userId = user.id
    token.issue(req,res)
  })
  .catch(e =>
    res.status(500).json({
      ok: false,
      message: 'An error ocurred while retrieving your user profile.'
    })
  )
}

function userError (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ ok: false, message: 'Access denied.' })
  }
}

module.exports = router