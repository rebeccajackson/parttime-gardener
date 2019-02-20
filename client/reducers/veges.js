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

export function currentVeg(state = initialState, action){
  switch (action.type){
    case 'SET_VEG':
      return action.currentVeg
    default:
      return state
  }
}