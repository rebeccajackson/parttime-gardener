//reducers - index
import { combineReducers } from 'redux';

import auth from './auth'
import {plantingMonths, month, monthVeges, months} from './months'
import {userVeges, currentVeg} from './veges'

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