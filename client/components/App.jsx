import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import MyGarden from './MyGarden'
import ViewMonth from './ViewMonth'
import Table from './Table'
import Home from './Home'

const App = () => {  
  return(
    <Router>
      <div id="home">
   
 
          <Route path='/' component={Table} />
          <div className='contents'>
            <Route exact path='/' component={Home} />
            <Route path='/view/:usergarden' component={MyGarden} />
            <Route path='/view/:month' component={ViewMonth} />      
          </div>

      </div>

    </Router>
  )
}

export default App

