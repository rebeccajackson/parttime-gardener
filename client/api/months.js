import request from 'superagent'

export function getMonths(){
  return request.get('/api/months')
  .then(res => {
    return res.body
  })
}

export function getMonthVeges(month){
  return request.post(`/api/months`)
  .send(month)
  .then(res => {
    return res.body
  })
}