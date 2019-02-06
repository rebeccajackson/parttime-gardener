const knex = require('knex')
const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
  getVeges,
  getMonths,
  getUsers,
  getMonth
}

function getVeges(){
  return db('veg').select()
}

function getMonths(){
  return db('months').select()
}


function getUsers(){
  return db('users').select()
}

function getMonth(monthName){
  return db('months')
  .where('month.name', monthName)
  .select()
}
// TODO
//function to get veg objects where the veg_id is in the veg_month table that matches the month.id

