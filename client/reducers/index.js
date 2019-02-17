import { combineReducers } from 'redux';
// import WeatherReducer from '../reducers/reducer_weather'

const rootReducer = combineReducers({
  state: (state = {}) => state
});
// state: (state = {}) => state
// default to write so you don't get errors before you have some reducers

export default rootReducer;