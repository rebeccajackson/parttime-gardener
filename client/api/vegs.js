import request from 'superagent'


export function getVeges(){
  return request.get('/api')
  .then(res => {
    return res.body
  })
}

