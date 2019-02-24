const connection = require('./connection')

module.exports = {
  getVeges,
  getMonths,
  getMonthVeges,
  getUserVeges,
  getPlantingMonthsArr,
  addToGarden
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
 
function getUserVeges(username, db = connection){
  return db('users')
  .where('username', username)
  .select('users.id').first().then(res => {
    return db('veg')
    .join('garden', 'garden.veg_id', 'veg.id')
    .where('garden.user_id', res.id)
    .select().orderBy('name')
  })
  .catch(err => {
    console.log(err)
  }) 
 
}

function getPlantingMonthsArr(veg, db = connection){
  return db('veg_months')
  .where('veg_months.veg_id', veg.id)
  .join('months', 'months.id', 'veg_months.month_id')
  .select('veg_months.month_id as id')
}

function addToGarden(veg, user, db = connection){
  return db('users')
  .where('username', user.username)
  .select('users.id').first().then(user => {
    return db('garden')
    .where('user_id', user.id)
    .where('veg_id', veg.id).then((rows)=>{
      if (rows.length===0) {
        return db('garden').insert({veg_id: veg.id, user_id: user.id})
      }
    })
    .catch(err => {
      console.log(err)
    })
  })
}