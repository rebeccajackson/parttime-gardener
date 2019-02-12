import React, {Fragment} from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'


class MyGarden extends React.Component{


  render(){
    const { user, userVeges } = this.props
    return(
      <Router >
        <Fragment>
         <div className="my-garden">
          <h3 className="box-title">{user[0].name}'s garden</h3>

          <div className="garden-list">
            {userVeges.map((obj, i) => 

              <Link className='vegNameList' key={i} 
                onClick={this.props.setVeg.bind(this, obj)}
                to={ `/veg/${obj.name}`}>
                {obj.name}
              </Link>
              )}
          </div>
        </div>
        {}
      </Fragment>
      </Router>
     
    )
  }
}
  

export default MyGarden