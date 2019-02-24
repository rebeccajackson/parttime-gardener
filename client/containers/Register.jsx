import React, { Component } from 'react'

import { connect } from 'react-redux'
import { registerUser } from '../actions/auth/register'
import { loginError } from '../actions/auth/login'


class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      password: '',
      confirm_password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  } 
  
 updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {username, password, confirm_password, first_name, last_name} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    this.props.dispatch(registerUser(this.state))
  }

  render() {
    const {auth} = this.props
    return (
      <div className="home-page">
        <form className="Register form box" onSubmit={this.submit}>
          <h1 className="auth-title">Register</h1>
          <hr />
          {auth.errorMessage && <span className="">{auth.errorMessage}</span>}
          <label className="">Username
            <input required className="" placeholder="User Name" type="text" name="username" onChange={this.updateDetails}/>
          </label>

          <div className="">
            <label className="">First Name
              <input required className="" placeholder="First Name" type="text" name="first_name" onChange={this.updateDetails}/>
            </label>
            <label className="">Last Name
              <input className="" placeholder="Last Name" type="text" name="last_name" onChange={this.updateDetails}/>
            </label>
          </div>
          <br />
          <div className="columns">
            <label className="">Password
              <input required className="" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
            </label>
            <label className="">Confirm Password
              <input required className="" placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
            </label>
          </div>
          <input className="" value="Register" type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}


export default connect(mapStateToProps)(Register)