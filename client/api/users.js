import request from 'superagent'


export function getUsers(){
  return request.get('/api')
  .then(res => {
    return res.body
  })
}
// export function getUserById(userId){
//   return request.post('/api', userId)
//   .then(res => {
//     return res.body
//   })
// }
