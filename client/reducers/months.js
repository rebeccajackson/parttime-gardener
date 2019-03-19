//reducers - months.js
import { LOAD_MONTH, LOAD_MONTHS, LOAD_MONTH_VEGES, LOAD_PLANTING_MONTHS } from '../actions'

const initialState = []

export function months(state = initialState, action){
  switch (action.type){
    case LOAD_MONTHS:
      return action.months
    
    default:
      return state
  }
}

export function monthVeges(state = initialState, action){
  switch (action.type){
    case LOAD_MONTH_VEGES:
      return action.monthVeges
    
    default:
      return state
  }
}

export function month(state = initialState, action){
  switch (action.type){
    case LOAD_MONTH:
      return action.month
    
    default:
      return state
  }
}

export function plantingMonths(state = initialState, action){
  switch (action.type){
    case LOAD_PLANTING_MONTHS:
      return action.plantingMonths
    
    default:
      return state
  }
}

