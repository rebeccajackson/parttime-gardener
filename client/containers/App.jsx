import React, {Fragment} from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
import { connect } from 'react-redux'

import Table from './Table'
import Register from './Register'

import { login } from '../api/users';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  } 

  
  handleChange(e){
    let user = this.state.user
    user[e.target.name] = e.target.value
    this.setState({ user })
  }

  handleLogin(e) {
    e.preventDefault();
    const {dispatch} = this.props
    const user = this.state.user
    dispatch(login(user))
  }

  render(){
    return(
      <Router>
        <Fragment>
          <div id="home">
            <div className="home-page">
              <form className="form" onSubmit={this.handleLogin}>
              
                  <input className='form-input' type="text" name='username'  onChange={this.handleChange} />
                  <input className='form-input' type="password" name='password' onChange={this.handleChange} />
            
                  <input className="button" type="submit" value="Login" />
              </form>
              <div>
                <Link to='/register'>Signup</Link>
              </div>
            </div>
            {this.props.userLogin.login && 
              <Table />
            }        
          </div>
        </Fragment>
      </Router>

    )
  }
}

function mapStateToProps({ userLogin}) {
  return { userLogin }
}

export default connect(mapStateToProps)(App)

