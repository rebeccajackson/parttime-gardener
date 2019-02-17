//routes - users.js

const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

router.post('/', (req,res)=>{
  db.getUserByName(req.body.name)
  .then(user =>{
    res.json(user)
  })
})

router.post('/info', (req,res)=>{
  db.addToGarden(req.body.veg, req.body.user[0])
  .then(veg =>{
    res.json(veg)
  })
})



module.exports = router