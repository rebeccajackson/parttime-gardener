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


function getMonthVeges(monthId){
  return db('veg_months')
  .where('veg_months.month_id', monthId)
  .join('veg', 'veg.id', 'veg_months.veg_id')
  .select()
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
