import request from 'superagent'

import {loadUserVeges} from '../actions/index'
import {showError} from '../actions/index'

export function getUserVeges(user){
  return (dispatch) =>{
    return request.post('/api/veg', user)
    .then(res => {
      dispatch(loadUserVeges(res.body))
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