//actions - index.js

import request from 'superagent'
// import axios from 'axios'

const LOGIN_USER = 'LOGIN_USER'
const SHOW_ERROR = 'SHOW_ERROR'

export const loginUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user: user,
    login:true
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function getUserByName(user){
  return (dispatch) => {
    return request.post(`/api`, user)
    .then(res => {
      dispatch(loginUser(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}

