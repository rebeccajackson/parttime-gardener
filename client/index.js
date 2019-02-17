import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'


import App from './containers/App'
import reducers from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})