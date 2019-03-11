const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

router.get('/months', (req,res)=>{
  db.getMonths()
  .then(months => {
    res.json(months)
  })
})

router.post('/months', (req,res) => {
  db.getMonthVeges(req.body.id)
  .then(veges =>{
    res.json(veges)
  })
})

module.exports = router