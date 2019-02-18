//actions - index.js

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

// export const userVeges = (user) => {//gets the veges by user
//   return {
//     type: 'USER_VEGES',
//     userVeges: something//incomplete
//   }
// }
