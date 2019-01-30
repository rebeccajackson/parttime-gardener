import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import View from './View'

const App = () => {
  return (
    <Router>
      
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/view' component={View} />
      </div>
      
    </Router>
  )
}

export default App

