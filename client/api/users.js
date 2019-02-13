import request from 'superagent'

export function getUserByName(user){
  return request.post('/api')
  .send(user)
  .then(res => {
    return res.body
  })
}

export function addToGarden(data){
  return request.post('/api/info')
  .send(data)
  .then(res => {
    return res.body
  })
}

