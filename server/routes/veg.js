const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

router.get('/', (req,res)=>{
  db.getVeges()
  .then(veges => {
    res.json(veges)
  })
})

module.exports = router