// api months.js
import request from 'superagent'

import { loadMonths } from '../actions/index'
import { loadMonth } from '../actions/index'
import { loadMonthVeges } from '../actions/index'
import { loadPlantingMonths } from '../actions/index'
import { showError } from '../actions/index'


export function getMonths(){
  return (dispatch) => {
    request.get('/api/months')
    .then(res => {
      dispatch(loadMonths(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}

export function getMonthVeges(month){
  return (dispatch) => {
    request.post(`/api/months`, month)
    .then(res => {
      const monthVeges = res.body
      dispatch(loadMonthVeges(monthVeges))
      dispatch(loadMonth(month))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
}
}

export function getPlantingMonthsArr(veg){
  return (dispatch) => {
    return request.post(`/api/veg/:vegName`, veg)
    .then(res => {
      const mapResult = res.body
        let plantingMonths = []

        for(var i=1; i<13; i++){
          if(mapResult.find(month => month.id === i)) plantingMonths.push({show: true})
          else plantingMonths.push({show: false})
        }
      dispatch(loadPlantingMonths(plantingMonths))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}