import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ViewMonth from './ViewMonth'
import Table from './Table'
import Home from './Home'

const App = () => {  
  return(
    <Router>
      <div id="home">
        <Table />
        <div className='contents'>
          <Route exact path='/' component={Home} />
          
          <Route path='/months/:month' component={ViewMonth} /> 
          {/* <Route path='/veg/:veg' component={ViewVeg} />  */}

        </div>
      </div>
    </Router>
  )
}

export default App

