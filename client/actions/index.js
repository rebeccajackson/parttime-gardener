import axios from 'axios'

const LOGIN_USER = 'LOGIN_USER'

export function getUserByName(user){
  console.log('actions:', user)
  const request = axios.get('./api').send(user)

  return {
    type: LOGIN_USER,
    payload: request
  }
}