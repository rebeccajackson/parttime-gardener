import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'

const App = () => {  
  return(
    <Router>
      <div id="home">
        <Home/>
      </div>
    </Router>
  )
}

export default App

