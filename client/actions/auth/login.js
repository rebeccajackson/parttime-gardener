import request from 'superagent'

import { saveUserToken } from './authUtilities/auth';
import { showError } from '../../actions/index'
import { receiveLogin } from '../../actions/index'



export function loginUser(creds){
  return (dispatch) => {
    return request.post(`/api/login`, creds)
    .then(res => {
      const userInfo = saveUserToken(res.body.token) // set the token 
      userInfo.name = creds.username
      userInfo.isAuthenticated = true
      dispatch(receiveLogin(userInfo));  
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}