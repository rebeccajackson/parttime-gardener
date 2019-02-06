import request from 'superagent'


export function getUsers(){
  return request.get('/api')
  .then(res => {
    return res.body
  })
}
