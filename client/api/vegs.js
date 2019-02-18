import request from 'superagent'

import {userVeges} from '../actions/index'
import {showError} from '../actions/index'

// export function getVeges(){
//   return request.get('/api')
//   .then(res => {
//     return res.body
//   })
// }


// export function getUserVeges(user){
//   return (dispatch) =>{
//     return request.post('/api/veg', user)
//     .then(res => {
//       dispatch(userVeges(res.body))
//     })
//     .catch(err => {
//       dispatch(showError(err.message))
//     })
//   }
// }
