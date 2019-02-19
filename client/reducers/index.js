//reducers - index

import { combineReducers } from 'redux';
import user from './users'

const rootReducer = combineReducers({
  user
});
// state: (state = {}) => state
// default to write so you don't get errors before you have some reducers

export default rootReducer;