//api -users
import request from 'superagent'

import { getUserVeges } from '../api/vegs'
import { showError } from '../actions/index'

export function addToGarden(payload){
  return (dispatch) => {
    request.post('/api/info', payload)
    .then(res => {
      dispatch(getUserVeges(payload.user))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}
