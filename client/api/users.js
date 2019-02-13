import request from 'superagent'

export function getUserByName(user){
  return request.post('/api')
  .send(user)
  .then(res => {
    return res.body
  })
}

export function addToGarden(veg, user){
  console.log('api', veg, user)
  return request.post('/api/info')
  .send(veg)
  .send(user)
  .then(res => {
    return res.body
  })
}

