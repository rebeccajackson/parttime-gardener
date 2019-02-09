import request from 'superagent'


export function getVeges(){
  return request.get('/api')
  .then(res => {
    return res.body
  })
}

//TODO get veg_month arr from join table

export function getVegesByUser(userId){
  return request.post('/api', userId)
  .then(res => {
    return res.body
  })
}
