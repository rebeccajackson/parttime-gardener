const knex = require('knex')
const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
  getVeges,
  getMonths,
  getUsers,
  getMonth,
  getUserByName
}

function getVeges(){
  return db('veg').select().orderBy('name')
}

function getMonths(){
  return db('months').select()
}


function getUsers(){
  return db('users').select()
}

function getMonth(monthName){
  return db('months')
  .where('name', monthName)
  .select().first()
}

function getUserByName(name){
  return db('users')
  .where('name', name)
  .select().first()
}
// TODO
//function to get veg objects where the veg_id is in the veg_month table that matches the month.id

