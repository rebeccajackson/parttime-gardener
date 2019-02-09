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

router.post('/months/:month', (req,res) => {
  db.getMonth(req.params.month)
  .then(month =>{
    res.json(month)
  })
})

module.exports = router