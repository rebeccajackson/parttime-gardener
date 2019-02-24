//reducers - index
import { combineReducers } from 'redux';

import auth from './auth'
import {months} from './months'
import {monthVeges} from './months'
import {plantingMonths} from './months'
import {month} from './months'
import {userVeges} from './veges'
import {currentVeg} from './veges'

const rootReducer = combineReducers({
  auth,
  months,
  monthVeges,
  month,
  userVeges,
  currentVeg,
  plantingMonths
});

export default rootReducer;