import request from 'superagent'

import {loadUserVeges} from '../actions/index'
import {showError} from '../actions/index'

export function getUserVeges(user){
  return (dispatch) =>{
    return request.post('/api/veg', user)
    .then(res => {
      dispatch(loadUserVeges(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}
