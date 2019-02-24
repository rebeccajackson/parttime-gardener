//TODO this page does nothing

import request from 'superagent'

import { get } from './localstorage'
import { isAuthenticated } from './auth'

const baseURL = '/api/'

export default function consume(method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'
  const token = get('token')
  const headers = {
    Accept: 'application/json'
  }
  if(isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
    console.log('i am important')
  }

  return request[method](baseURL + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      console.log('i get this', res)
      return res
    })
    .catch(err => {
      throw err
    })
}
