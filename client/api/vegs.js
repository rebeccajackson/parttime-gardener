import request from 'superagent'

export function getVeges(){
  return request.get('/api')
  .then(res => {
    return res.body
  })
}


export function getUserVeges(user){
  console.log('api', user)
  return request.post('/api/veg')
  .send(user)
  .then(res => {
    return res.body
  })
}
