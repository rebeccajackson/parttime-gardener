import React from 'react'

import { getUserByName } from '../api/users';

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
  } 
  
  handleClick(e){
    return this.setState(
      {user: e.target.value}
    )
  }
  
  handleSubmit(event) {
    getUserByName(this.state.value);
    event.preventDefault();
  }

  render(){
     return(
   
    <div className="home-page">
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter your username:
          <input type="text" value={this.state.value} onChange={this.handleClick} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>

  )}
}

export default Home
