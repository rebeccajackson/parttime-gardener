//reducers - users.js
const initialState = {login: false}

import { LOGIN_USER } from "../actions";

function userLogin(state = initialState, action){
  switch (action.type){
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.user,
        login: action.login
      }
      default:
        return state
  }
}

export default userLogin