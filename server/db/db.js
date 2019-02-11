const knex = require('knex')
const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
  getVeges,
  getMonths,
  getMonthVeges,
  getUserByName,
  getUserVeges
}

function getVeges(){
  return db('veg').select().orderBy('name')
}

function getMonths(){
  return db('months').select()
}


function getMonthVeges(monthName){
  return db('months')
  .join('veg_month', 'veg_month.month_id', 'months.id')
  .where('veg_month.veg_id', monthName)//Need the object id
  .select().first()
}

function getUserByName(name){
  return db('users')
  .where('name', name)
  .select()
}
 
function getUserVeges(id){
  return db('veg')
  .join('garden', 'garden.veg_id', 'veg.id')
  .where('garden.user_id', id)
  .select()
}

// .then(user => {
//   return db('veg')
//   .join('garden', 'garden.veg_id', 'veg.id')
//   .where('garden.user_id', user.id)
//   .select()