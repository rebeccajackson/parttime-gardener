// api months.js
import request from 'superagent'

import { loadMonths } from '../actions/index'
import { redirect } from '../actions/index'
import { loadMonthVeges } from '../actions/index'
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
      dispatch(redirect(month))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
}
}

export function getPlantingMonthsArr(veg){
  return request.post(`/api/veg/:vegName`)
  .send(veg)
  .then(res => {
    return res.body
  })
}