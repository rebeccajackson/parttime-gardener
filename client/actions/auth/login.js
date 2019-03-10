import request from 'superagent'

import { saveUserToken } from '../../authUtilities/auth'

function requestLogin () {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin (user) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

export function loginError (message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds){
  return (dispatch) => {
    dispatch(requestLogin())
    return request.post(`/api/login`, creds)
    .then(res => {
      const userInfo = saveUserToken(res.body.token)
      userInfo.name = creds.first_name
      dispatch(receiveLogin(userInfo)); 
      document.location = "/#/" 
    })
    .catch(err => {
      dispatch(loginError(err.response.body.message))
    })
  }
}