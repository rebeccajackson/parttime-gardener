import React, {Fragment} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ViewRoutes from './ViewRoutes'
import MyGarden from './MyGarden'

import { getUserByName } from '../api/users';

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {},
      login: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  } 

  handleChange(e){
    let user = this.state.user
    user[e.target.name] = e.target.value
    this.setState({ user })
  }
  

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user
    getUserByName(user).then(user => {
      this.setState({ 
        user: user,
        login: !this.state.login
      })
    });
  }

  render(){
    return(
      <Router>
        
        <div className='contents'>
          {!this.state.login &&  <div className="home-page">
            <form onSubmit={this.handleSubmit}>
              <label>
                Username:
                <input type="text" value={this.state.user.name} name='name' onChange={this.handleChange} />
              </label>
              <input type="submit" value="Login" />
            </form>
          </div>}

          {this.state.login && 
            <Fragment>
              <MyGarden user={this.state.user} />
              <ViewRoutes path='/veg' user={this.state.user}/>
            </Fragment>
          }        
        </div>
      </Router>
    )
  }
}

export default Home
