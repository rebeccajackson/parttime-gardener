var environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const {generateHash} = require('../auth/hash')
const connection = require('knex')(config)

module.exports = {
  createUser,
  getVeges,
  getMonths,
  getMonthVeges,
  getUser,
  getUserIdByName,
  getUserVeges,
  getPlantingMonthsArr,
  addToGarden
}

function createUser ({username, password}, db = connection) {
  return generateHash(password)
  .then(hash =>{
    return db('users').insert({username, hash})
  })
}

function getUserIdByName(username, db = connection){
  console.log('db', username)
  return db('users')
  .where('users.name', username)
  .select('user.id')
}
function getUser(id, db = connection){
  return db('users')
  .where('users.id', id)
  .select().first()
}

function getVeges(db = connection){
  return db('veg').select().orderBy('name')
}

function getMonths(db = connection){
  return db('months').select()
}


function getMonthVeges(monthId, db = connection){
  return db('veg_months')
  .where('veg_months.month_id', monthId)
  .join('veg', 'veg.id', 'veg_months.veg_id')
  .select().orderBy('name')
}

 
function getUserVeges(id, db = connection){
  return db('veg')
  .join('garden', 'garden.veg_id', 'veg.id')
  .where('garden.user_id', id)
  .select().orderBy('name')
}

function getPlantingMonthsArr(veg, db = connection){
  return db('veg_months')
  .where('veg_months.veg_id', veg.id)
  .join('months', 'months.id', 'veg_months.month_id')
  .select('veg_months.month_id as id')
}


function addToGarden(veg, user, db = connection){
  return db('garden')
  .insert({veg_id: veg.id, user_id: user.id})

}