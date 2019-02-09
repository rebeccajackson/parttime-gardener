const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

router.get('/', (req,res)=>{
  db.getUsers()
  .then(users => {
    res.json(users)
  })
})

router.post('/', (req,res)=>{
  db.getUserByName(req.body.name)
  .then(user =>{
    res.json(user)
  })
})

router.post('/garden', (req,res)=>{
  console.log(req.params.userId)
  db.getUserById(req.params.userId)
  .then(user =>{
    res.json(user)
  })
})

module.exports = router