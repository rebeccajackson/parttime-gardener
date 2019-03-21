//reducers - veges.js
import { LOAD_USER_VEGES, SET_VEG, DISPLAY_VIEW_VEG } from '../actions/index'

const initialState = []

export function userVeges(state = initialState, action){
  switch (action.type){
    case LOAD_USER_VEGES:
      return  action.userVeges
    default:
      return state
  }
}

export function currentVeg(state = initialState, action){
  switch (action.type){
    case SET_VEG:
    case DISPLAY_VIEW_VEG:
      return action.currentVeg
    default:
      return state
  }
}

