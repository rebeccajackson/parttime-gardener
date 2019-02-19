//actions - index.js


export function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    user
  };
}

export const showError = (errorMessage) => {
  return {
    type: 'SHOW_ERROR',
    errorMessage: errorMessage
  }
}

// export const userVeges = (user) => {//gets the veges by user
//   return {
//     type: 'USER_VEGES',
//     userVeges: something//incomplete
//   }
// }
