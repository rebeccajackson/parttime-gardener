import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import MyGarden from './MyGarden'
import ViewMonth from './ViewMonth'
import Table from './Table'

const App = () => {  
  return(
    <Router>
      <div id="view-page">
        <Route path='/' component={Table} />
        <Route path='/view/:usergarden' component={MyGarden} />
        <Route path='/view/:month' component={ViewMonth} />      
      </div>

    </Router>
  )
}

export default App

