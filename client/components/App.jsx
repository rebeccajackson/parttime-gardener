import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Table from './Table'
import Home from './Home'

const App = () => {  
  return(
    <Router>
      <div id="home">
        <Table />
        
        <Route path='/' component={Home} />
        
      </div>
    </Router>
  )
}

export default App

