//reducers - redirect.js
const initialState = null


export function redirect(state = initialState, action){
  switch (action.type){
    case 'REDIRECT':
      return action.month
    
    default:
      return state
  }
}