import React, {Fragment} from 'react'
import {HashRouter as Router} from 'react-router-dom'

import Table from './Table'

import { getUserByName } from '../api/users';



class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {},
      login: false,
      userVeges: []
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
    console.log(user)
    getUserByName(user).then(user => {
      this.setState({ 
        user: user,
        login: !this.state.login
      })
    });
  }
  

  render(){
    return(
   
      <Fragment>
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
          <Table 
          user={this.state.user}
          />
        }        
      </Fragment>
    
    )
  }
}

export default Home
