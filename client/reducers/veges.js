//reducers - veges.js
const initialState = []


export function userVeges(state = initialState, action){
  switch (action.type){
    case 'LOAD_USER_VEGES':
      return action.userVeges
    
    default:
      return state
  }
}

export function monthClickedVeg(state = initialState, action){
  switch (action.type){
    case 'SET_VEG':
      return action.monthClickedVeg
    
    default:
      return state
  }
}