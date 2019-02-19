//reducers - months.js
const initialState = []


export function months(state = initialState, action){
  switch (action.type){
    case 'LOAD_MONTHS':
      return action.months
    
    default:
      return state
  }
}

export function monthVeges(state = initialState, action){
  switch (action.type){
    case 'LOAD_MONTH_VEGES':
      return action.monthVeges
    
    default:
      return state
  }
}

export function month(state = initialState, action){
  switch (action.type){
    case 'LOAD_MONTH':
      return action.month
    
    default:
      return state
  }
}

