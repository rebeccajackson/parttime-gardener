import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { getUserVeges } from '../api/vegs';

class MyGarden extends React.Component{

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getUserVeges(this.props.auth.user))
  }

  render(){
    const { userVeges } = this.props
    return(
      <Router >
        <div className="my-garden">
          <div className="box-title">
            <h3>My Garden</h3>
          </div>
          <div className="garden-list">
            {userVeges.map((obj, i) => 
            <Link className='vegNameList' key={i} 
              onClick={this.props.handleVegClick.bind(this, obj)}
              to={ `/veg/${obj.name}`}>
              {obj.name}
            </Link>
            )}
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps({auth, userVeges}){
  return ({ auth, userVeges })
}

export default connect(mapStateToProps)(MyGarden)