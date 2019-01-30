import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import Table from './Table'
import MyGarden from './MyGarden'
import View from './View'


const App = () => {
  return (
    <Router>
      
      <div>
        <h1>Welcome</h1>
        
        <div>
          <Route path='/view' component={View} />
        </div>


      </div>


      
    </Router>

  )
}

export default App

