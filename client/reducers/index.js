//reducers - index
import { combineReducers } from 'redux';

import user from './users'
import {months} from './months'
import {monthVeges} from './months'
import {redirect} from './redirect'

const rootReducer = combineReducers({
  user,
  months,
  monthVeges,
  redirect
});

export default rootReducer;