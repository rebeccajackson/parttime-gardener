import React from 'react'

import { getUserByName } from '../api/users';

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {}
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
      this.setState({ user})
    });
  }

  render(){
     return(
   
      <div className="home-page">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.user.name} name='name' onChange={this.handleChange} />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>

  )}
}

export default Home
