import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'

import ViewMonth from './ViewMonth'
import ViewVeg from './ViewVeg'
import MyGarden from './MyGarden';


class ViewRoutes extends React.Component {

  render(){
    const { user, userVeges, month, setVeg, monthVeges } = this.props
    return(
      <Fragment>
        <MyGarden 
           user={this.props.user}
           userVeges={this.props.userVeges}
           month={this.props.month}
           setVeg={this.props.setVeg}
           monthVeges={this.props.monthVeges}
        />
        <Switch>
        <Route path='/veg' render={(props) => (
              <ViewVeg
              user={this.props.user}
              userVeges={this.props.userVeges}
              setVeg={this.props.setVeg}
              monthVeges={this.props.monthVeges}
              />
            )} />
         
          <Route path='/months' render={(props) => (
              <ViewMonth setVeg={this.props.setVeg}/>
            )} />
        </Switch>
        
      </Fragment>
    )
  }
}

export default ViewRoutes