import request from 'superagent'
// get the token from localstorage
import { get } from '../auth/authUtilities/localstorage'
const token = get("token")

//append the token to our API requests - without this you'll get an access forbidden error
request.defaults.headers.common = { Authorization: `bearer ${token}` }


