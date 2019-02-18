// server/auth/token.js
const jwt = require('jsonwebtoken')

module.exports = {
  issue
}

function issue (req, res) {
  res.json({
    ok: true,
    message: 'Authentication successful.',
    token: createToken(res.locals.userId)
  })
}

function createToken (id) {
  return jwt.sign({id}, process.env.GARDEN_ENV, {expiresIn: '1d'})
}