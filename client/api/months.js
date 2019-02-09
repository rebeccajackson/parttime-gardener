import request from 'superagent'

export function getMonths(){
  return request.get('/api/months')
  .then(res => {
    return res.body
  })
}

export function getMonth(monthName){
  return request.post(`/api/months/${monthName}`)
  .then(res => {
    return res.body
  })
}