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

router.post('/veg', (req,res)=> {
  db.getUserVeges(req.body.username)
  .then(veges =>{
    res.json(veges)
  })
})

router.post('/veg/:vegName', (req,res) => {
  db.getPlantingMonthsArr(req.body)
  .then(months =>{
    res.json(months)
  })
})

module.exports = router