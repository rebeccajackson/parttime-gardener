import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'

import ViewMonth from './ViewMonth'
import ViewVeg from './ViewVeg'
import MyGarden from './MyGarden';


class ViewRoutes extends React.Component {
 

  render(){
    console.log('view routes', this.props)
    return(
      <Fragment>
        <MyGarden 
           user={this.props.user}
           userVeges={this.props.userVeges}
           month={this.props.month}
        />
        <Switch>
          <Route path='/veg' render={(props) => (
              <ViewVeg
              user={this.props.user}
              userVeges={this.props.userVeges}
              />
            )} />
         
          <Route path='/months/:month' render={(props) => (
              <ViewMonth 
              user={this.props.user}
              month={this.props.month}
              userVeges={this.props.userVeges}
              />
            )} />

          
          
        </Switch>
        
      </Fragment>
    )
  }
}

export default ViewRoutes