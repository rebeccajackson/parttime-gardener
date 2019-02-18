import React, { Component } from 'react'

import { signup } from '../api/users';

export default class Register extends Component {
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
    const {dispatch} = this.props
    const register = this.state.user
    dispatch(signup(register))
  }
  render() {
    return (
      <div className="home-page">
          <form className="form" onSubmit={this.handleSubmit}>
          
              <input className='form-input' type="text" name='username'  onChange={this.handleChange} />
              <input className='form-input' type="password" name='password' onChange={this.handleChange} />
        
              <input className="button" type="submit" value="Login" />
          </form>
        </div>
    )
  }
}