import React, {Fragment} from 'react'
import {Router, Route, Switch} from 'react-router-dom'

import ViewMonth from './ViewMonth'
import ViewVeg from './ViewVeg'
import MyGarden from './MyGarden';


class ViewRoutes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userVeges: this.props.userVeges,
      veg: []
    }
  }

  render(){
    return(
      <Fragment>
        <MyGarden 
          user={this.props.user}
          userVeges={this.props.userVeges}
          month={this.props.month}
          setVeg={this.setVeg}
          monthVeges={this.props.monthVeges}
          veg={this.props.veg}

        />
        <Switch>
          <Route path='/veg' render={(props) => (
              <ViewVeg
              user={this.props.user}
              userVeges={this.props.userVeges}
              setVeg={this.setVeg}
              monthVeges={this.props.monthVeges}
              veg={this.props.veg}
              />
            )} />
        
          <Route path='/months' render={(props) => (
            <ViewMonth 
            setVeg={this.setVeg}
            monthVeges={this.props.monthVeges}
            />
          )} />
      </Switch>
    </Fragment>
    )
  }
}

export default ViewRoutes