import request from 'superagent'


export function getVeges(){
  return request.get('/api')
  .then(res => {
    return res.body
  })
}

export function getVegesByUser(){
  return request.post('/api', userId)
  .then(res => {
    return res.body
  })
}
