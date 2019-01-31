import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Table from './Table'
import MyGarden from './MyGarden'
import ViewMonth from './ViewMonth'


const View = () => {
  return (
    <Router>
      <div id="view-page">
        <Route path='/view' component={Table} />
        <Route path='/view' component={MyGarden} />
        <Route path='/view' component={ViewMonth} />
      </div>
    </Router>

  )
}

export default View