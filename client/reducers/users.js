//reducers - users.js
const initialState = {}


function user(state = initialState, action){
  switch (action.type){
    case 'LOGIN_SUCCESS':
      return action.user
    
      default:
        return state
  }
}

export default user