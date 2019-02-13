const knex = require('knex')
const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
  getVeges,
  getMonths,
  getMonthVeges,
  getUserByName,
  getUserVeges,
  getPlantingMonthsArr,
  addToGarden
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
  .select().orderBy('name')
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
  .select().orderBy('name')
}

function getPlantingMonthsArr(veg){
  return db('veg_months')
  .where('veg_months.veg_id', veg.id)
  .join('months', 'months.id', 'veg_months.month_id')
  .select('veg_months.month_id as id')
}


function addToGarden(veg, user){
  return db('garden')
  .insert({veg_id: veg.id, user_id: user.id})

}