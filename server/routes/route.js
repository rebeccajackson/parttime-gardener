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

router.post('/months', (req,res) => {
  db.getMonth(req.params.monthName)
  .then(month =>{
    res.json(month)
  })
})

router.post('/')

module.exports = router