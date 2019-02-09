import request from 'superagent'


export function getUsers(){
  return request.get('/api')
  .then(res => {
    return res.body
  })
}

export function getUserByName(user){
  return request.post('/api')
  .send(user)
  .then(res => {
    return res.body
  })
}
