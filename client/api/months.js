import request from 'superagent'

export function getMonths(){
  return request.get('/api/months')
  .then(res => {
    return res.body
  })
}

export function getMonthVeges(monthName){
  return request.post(`/api/months`)
  .send(monthName)
  .then(res => {
    return res.body
  })
}