import request from 'superagent'

import {showError} from '../../actions/index'
import { receiveLogin } from '../../actions/index';
import { saveUserToken } from './authUtilities/auth'

export function registerUser(creds){
  return (dispatch) => {
    return request.post(`/api/register`, creds)
    .then(res => {
      const userInfo = saveUserToken(res.body.token);
      userInfo.name = creds.username
      userInfo.isAuthenticated = true
      dispatch(receiveLogin(userInfo));  
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}