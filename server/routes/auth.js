// server/routes/auth.js

const express = require('express')
const router = express.Router()
const db = require('../db/db')

const verifyJwt = require('express-jwt')
const token = require('../auth/token')

router.use(express.json())
router.use(userError)

router.post('/register', register, token.issue)

router.get('/user',
  verifyJwt({ secret: process.env.GARDEN_ENV }),
  user
)

function register (req, res, next) {
  const {username, password} = req.body
  console.log(username)
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

function user (req, res) {
  //go to db first and get user by username then check token
  console.log(req.body)
  const {username} = req.body
  db.getUserIdByName(username)
  .then(userId => {
    console.log(userId)
      db.getUser(userId)
    .then(({ username, id }) =>
      res.json({
        ok: true,
        username,
        id
      }))
    .catch(e =>
      res.status(500).json({
        ok: false,
        message: 'An error ocurred while retrieving your user profile.'
      }))
  })
}

function userError (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ ok: false, message: 'Access denied.' })
  }
}

module.exports = router