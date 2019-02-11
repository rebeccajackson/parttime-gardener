import request from 'superagent'

export function getUserByName(user){
  return request.post('/api')
  .send(user)
  .then(res => {
    return res.body
  })
}

