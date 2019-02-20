//reducers - index
import { combineReducers } from 'redux';

import user from './users'
import {months} from './months'
import {monthVeges} from './months'
import {month} from './months'
import {userVeges} from './veges'
import {currentVeg} from './veges'


const rootReducer = combineReducers({
  user,
  months,
  monthVeges,
  month,
  userVeges,
  currentVeg
});

export default rootReducer;