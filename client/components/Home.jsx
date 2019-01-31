import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import View from './View'

const Home = () => {  
  return(
    <Router>
    <div className="home">
      <h1>Home</h1>
      <Link to='/view'>View</Link>
    </div>

    </Router>
  )
}
export default Home