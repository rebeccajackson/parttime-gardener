import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
import { connect } from 'react-redux'

class MyGarden extends React.Component{
  render(){
    const { user, userVeges } = this.props
    return(
      <Router >
        <div className="my-garden">
          <h3 className="box-title">{user.name}'s garden</h3>

          <div className="garden-list">
            {/* {userVeges.map((obj, i) => 

            <Link className='vegNameList' key={i} 
              onClick={this.props.setVeg.bind(this, obj)}
              to={ `/veg/${obj.name}`}>
              {obj.name}
            </Link>
            )} */}
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps({user}){
  return ({ user })
}

export default connect(mapStateToProps)(MyGarden)