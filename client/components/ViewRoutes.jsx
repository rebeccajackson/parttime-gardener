import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'

import ViewMonth from './ViewMonth'
import ViewVeg from './ViewVeg'


class ViewRoutes extends React.Component {
 

  render(){
    return(
      <Fragment>
        <Switch>
          <Route path='/veg' render={(props) => (
              <ViewVeg
              user={this.props.user}
              {...props}
              />
            )} />
         
          <Route path='/months' render={(props) => (
              <ViewMonth 
              user={this.props.user}
              {...props}
              />
            )} />

          
          
        </Switch>
        
      </Fragment>
    )
  }
}

export default ViewRoutes