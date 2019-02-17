import { combineReducers } from 'redux';
import userLogin from './users'

const rootReducer = combineReducers({
  userLogin
});
// state: (state = {}) => state
// default to write so you don't get errors before you have some reducers

export default rootReducer;