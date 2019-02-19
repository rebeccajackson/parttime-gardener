import React, { Fragment } from 'react'
import { HashRouter as Router, Link, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import { loginUser } from '../actions/auth/login';

import Table from './Table'
import Register from './Register';


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
    const creds = this.state.user
    dispatch(loginUser(creds))
  }

  render(){
    console.log(this.props)
    return(
      <Router>
        <Fragment>
          <div id="home">
          {!this.props.user.isAuthenticated && 
            <div className="home-page">
              <form className="form" onSubmit={this.handleLogin}>
              
                <input className='form-input' type="text" name='username'  onChange={this.handleChange} />
                <input className='form-input' type="password" name='password' onChange={this.handleChange} />
          
                <input className="button" type="submit" value="Login" />
              </form>
              <div>
                <Link to='/register'>Signup</Link>
                <Route path="/register" component={Register} />
              </div>
            </div>
          }
            {this.props.user.isAuthenticated && 
              <Table />
            }        
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ user }) {
  return { user }
}

export default connect(mapStateToProps)(App)

