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

router.get('/months', (req,res)=>{
  db.getMonths()
  .then(months => {
    res.json(months)
  })
})

router.get('/', (req,res)=>{
  db.getUsers()
  .then(users => {
    res.json(users)
  })
})

router.get('/months/:monthName', (req,res) => {
  db.getMonths(req.params.name)
  .then(month =>{
    res.json(month)
  })
})

module.exports = router