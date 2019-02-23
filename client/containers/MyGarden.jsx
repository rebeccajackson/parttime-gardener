import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { getUserVeges } from '../api/vegs';

class MyGarden extends React.Component{

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getUserVeges(this.props.user))
  }

  render(){
    const { user, userVeges } = this.props
    return(
      <Router >
        <div className="my-garden">
          <h3 className="box-title">{user.name}'s garden</h3>

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

function mapStateToProps({user, userVeges}){
  return ({ user, userVeges })
}

export default connect(mapStateToProps)(MyGarden)