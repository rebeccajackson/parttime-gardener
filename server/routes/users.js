//server/routes/users.js

const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.use(express.json())

router.post('/info', (req,res)=>{
  db.addToGarden(req.body.veg, req.body.user[0])
  .then(veg =>{
    res.json(veg)
  })
})



module.exports = router