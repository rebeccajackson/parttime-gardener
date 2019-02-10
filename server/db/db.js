const knex = require('knex')
const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
  getVeges,
  getMonths,
  getUsers,
  getMonth,
  getUserByName,
  getVegesByUser
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

function getVegesByUser(id){
  return db('veg')
  .join('garden', 'garden.veg_id', 'veg.id')
  .where('garden.user_id', id)
  .select()
}

