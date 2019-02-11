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




module.exports = router