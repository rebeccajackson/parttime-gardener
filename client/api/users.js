//api -users
import request from 'superagent'

import {loginUser} from '../actions/index'
import {showError} from '../actions/index'

export function signup(register){
  return (dispatch) => {
    return request.post(`/api/register`, register)
    .then(res => {
      dispatch(login(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}

export function login(user){
  return (dispatch) => {
    console.log('username: ', user.username)
    return request.get(`/api/user`, user)
    .then(res => {
      console.log('result api/user: ', res.body)
      dispatch(loginUser(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}



// export function addToGarden(data){
//   return request.post('/api/info')
//   .send(data)
//   .then(res => {
//     return res.body
//   })
// }

