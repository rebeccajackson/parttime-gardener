import request from 'superagent'

import {loginError, receiveLogin} from '../auth/login'
import { saveUserToken } from '../../authUtilities/auth'

export function registerUser(creds){
  return dispatch => {
    return request.post(`/api/register`, creds)
    .then(res => {
      const userInfo = saveUserToken(res.body.token);
      userInfo.name = creds.first_name
      userInfo.isAuthenticated = true
      dispatch(receiveLogin(userInfo)); 
      document.location = "/#/"
    })
    .catch(err => {
      dispatch(loginError(err.response.body.message))
    })
  }
}